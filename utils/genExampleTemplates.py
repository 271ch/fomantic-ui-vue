#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# This script has to be executed in its own folder!

import subprocess
import os
import os.path
import re
from pyquery import PyQuery as pq

ElementTypes = ['elements', 'collections', 'views'] #, 'modules']

class App:
  "This is my second class"
  a = 10

  def checkCWD(self):
    return True

  def clone(self):
    rc = subprocess.call(['git', 'clone', 'https://github.com/fomantic/Fomantic-UI-Docs.git'], cwd="./tmp")
    if rc != 0:
      rc = subprocess.call(['git', 'fetch'], cwd="./tmp/Fomantic-UI-Docs")
    return rc == 0

  def generate(self):
    # ./tmp/Fomantic-UI-Docs/server/documents/elements/button.html.eco
    subprocess.call(['mkdir', 'tmp/Examples'])
    for et in ElementTypes:
      print('> {}'.format(et))
      self.generateElementType(et)

  def generateElementType(self, et):
    if not os.path.isdir(os.path.join('./tmp/Examples',et)):
      subprocess.call(['mkdir', os.path.join('./tmp/Examples',et)])
    p = os.path.join('./tmp/Fomantic-UI-Docs/server/documents',et)
    files = [f for f in os.listdir(p) if os.path.isfile(os.path.join(p, f))]
    files.sort()
    for f in files:
      print('>> {}'.format(f))
      [e,r]=f.split('.',1)
      if e == 'container':
        print('>>> Warning: container is skipped')
        continue
      if r != 'html.eco':
        print('>>> Error: ending html.eco expected')
        continue
      if not os.path.isdir(os.path.join('./tmp/Examples',et,e)):
        subprocess.call(['mkdir', os.path.join('./tmp/Examples',et,e)])
      self.extractExamples(os.path.join(p, f),
                           os.path.join('./tmp/Examples',et,e), et, e)

  def extractExamples(self, f, path, et, e):
    print(' extract {} in {}'.format(f,path))
    lines = open(f, 'r').readlines()
    index = 0
    for l in lines:
      if l.startswith(r'<div'):
        break
      index += 1
    lines = lines[index:]

    d = pq(''.join(lines))
    m = d('.main.container')
    if len(m) != 1:
      print('>>> Error: there are {} (and not 1) main containers'.format(len(m)))
      return

    mc = m[0]

    title1 = '???'
    title2 = '???'
    descr = '???'
    gen_counter = 0
    counter = 0
    for c in mc.findall('*'):
      if c.tag == 'h2':
        title1 = c.text
      elif c.tag == 'div':
        if pq(c).hasClass('another'):
          counter += 1
        else:
          counter = 1
          title2 = '???'
          descr = '???'
          h4 = pq(c).children('h4')
          if len(h4) >= 1:
            title2 = h4[0].text.strip()
          p = pq(c).children('p')
          if len(p) == 1 and p[0].text != None:
            descr = p[0].text.strip()

        print('{}: {} --- {}'.format(counter, title2, descr))
        c_h4 = pq(c).children('h4')
        if len(c_h4) >= 1:
          pq(c_h4[0]).remove()
        pq(c).children('p').remove()

        sourceHTML = self.prepText(pq(c).html())

        comp_name = et.title()[:-1]+e.title()+'{:03d}'.format(gen_counter)+re.sub(r'\W+', '', title2)+str(counter)

        gen_counter += 1
        fname = comp_name+'.vue'
        fout = open(os.path.join(path,fname),'w')
        fout.write(r'<template>'+'\n')
        fout.write(r'  <div>'+'\n')
        fout.write(sourceHTML)
        fout.write(r'  </div>'+'\n')
        fout.write(r'</template>'+'\n\n')

        fout.write(r'<script>'+'\n')
        fout.write(r'export default {'+'\n')
        fout.write( '  name: \'{}\',\n'.format(comp_name))
        fout.write(r'  props: {'+'\n')
        fout.write( '    elementType: \'{}\',\n'.format(et))
        fout.write( '    element: \'{}\',\n'.format(e))
        fout.write( '    title1: \'{}\',\n'.format(title1))
        fout.write( '    title2: \'{}\',\n'.format(title2))
        fout.write( '    description: \'{}\',\n'.format(descr))
        fout.write( '    model: {},\n'.format(self.prepTextJS(pq(c).html())))
        fout.write( '  },\n')
        fout.write(r'};'+'\n')
        fout.write(r'</script>'+'\n')
        fout.close()

  def prepText(self, t):
    t2 = t.split('\n')
    t3=[]
    for l in t2:
      l2 = l.strip()
      if l2 != '':
        t3.append(l)
    return '\n'.join(t3)+'\n'

  def prepTextJS(self, t):
    t2 = t.split('\n')
    t3=[]
    first = True
    for l in t2:
      l2 = l.strip()
      if l2 != '':
        t3.append(('' if first else '      ')+'\''+l.replace('\'','\\\'')+'\\n\' +')
        first = False
    if len(t3) >0 and len(t3[len(t3)-1])>1:
      t3[len(t3)-1]=t3[len(t3)-1][:-2]
    return '\n'.join(t3)


  def statistics(self):
    pass

def main():
  app = App()
  if not app.checkCWD():
    return

  # Clone source github repository
  if not app.clone():
    print('Error by cloning')
    return

  app.generate()
  app.statistics()


if __name__== "__main__":
  main()
