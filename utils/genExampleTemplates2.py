#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# This script has to be executed in its own folder!

import subprocess
import os
import os.path
import re
from pyquery import PyQuery as pq

ElementTypes = ['elements', 'collections', 'views'] #, 'modules']
Elements = ['grid']

def convQuote(str):
  return str.replace('\'', '\\\'')
def convQuoteCR(str):
  return convQuote(str).replace('\n', '').strip()

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
    self.summary_file = open(os.path.join('./tmp/Examples','examples.js'),'w')
    self.summary_file.write('let a = [];\n')
    self.summary_file.write('let b = [];\n')
    self.summary_file.write('let c = [];\n')
    for et in ElementTypes:
      print('> {}'.format(et))
      self.generateElementType(et)
    self.summary_file.write('export default a;\n')
    self.summary_file.close()

  def generateElementType(self, et):
    self.summary_file.write('// begin of element type [{}]\n'.format(et))
    if not os.path.isdir(os.path.join('./tmp/Examples',et)):
      subprocess.call(['mkdir', os.path.join('./tmp/Examples',et)])
    p = os.path.join('./tmp/Fomantic-UI-Docs/server/documents',et)
    files = [f for f in os.listdir(p) if os.path.isfile(os.path.join(p, f))]
    files.sort()
    for f in files:
      [e,r]=f.split('.',1)
      if len(Elements)>0 and e not in Elements:
        continue
      print('>> {}'.format(f))
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
    self.summary_file.write('a.push([\'{}\', b]); b = [];\n'.format(et))
    self.summary_file.write('// end of element type [{}]\n'.format(et))

  def extractExamples(self, f, path, et, e):
    self.summary_file.write('// begin of element [{}]\n'.format(e))
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
    comps = []

    title1 = '???'
    title2 = '???'
    descr = '???'
    gen_counter = 0
    counter = 0
    for c in pq(mc).find('.example'):
      print(' >>> Example <<<<')
      h2 = pq(c).prev('h2')
      if len(h2) >= 1:
        title1 = h2[0].text.strip()

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

      CONV = ['','A','B','C','D','E','F','G','H']

      comp_name = et.title()[:-1]+e.title()+re.sub(r'\W+', '', title2)+str(counter)
      for i in range(100):
        comp_name_new = comp_name + CONV[i]
        if not comp_name_new in comps:
          comp_name = comp_name_new
          break
      comps.append(comp_name)

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
      fout.write(r'  info: {'+'\n')
      fout.write( '    converted: false,\n')
      fout.write( '    elementType: \'{}\',\n'.format(et))
      fout.write( '    element: \'{}\',\n'.format(e))
      fout.write( '    title1: \'{}\',\n'.format(convQuoteCR(title1)))
      fout.write( '    title2: \'{}\',\n'.format(convQuoteCR(title2)))
      fout.write( '    description: \'{}\',\n'.format(convQuote(descr)))
      fout.write( '    model: {},\n'.format(self.prepTextJS(pq(c).html())))
      fout.write( '  },\n')
      fout.write(r'};'+'\n')
      fout.write(r'</script>'+'\n')
      fout.close()
      self.summary_file.write('import {} from \'./{}/{}/{}\';\n'
                              .format(comp_name,et,e,comp_name))
      self.summary_file.write('c.push({});\n'.format(comp_name))
    self.summary_file.write('b.push([\'{}\', c]); c = [];\n'.format(e))
    self.summary_file.write('// end of element [{}]\n'.format(e))

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
        t3.append(('' if first else '      ')+'\''+convQuote(l)+'\\n\' +')
        first = False
    if len(t3) >0 and len(t3[len(t3)-1])>1:
      t3[len(t3)-1]=t3[len(t3)-1][:-2]
    if len(t3)==0:
      return '\'\''
    else:
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
