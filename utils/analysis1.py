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
  "..."
  stat1 = dict()

  def checkCWD(self):
    return True

  def clone(self):
    rc = subprocess.call(['git', 'clone', 'https://github.com/fomantic/Fomantic-UI-Docs.git'], cwd="./tmp")
    if rc != 0:
      rc = subprocess.call(['git', 'fetch'], cwd="./tmp/Fomantic-UI-Docs")
    return rc == 0

  def analysis(self):
    for et in ElementTypes:
      self.analysisElementType(et)

  def analysisElementType(self, et):
    p = os.path.join('./tmp/Fomantic-UI-Docs/server/documents',et)
    files = [f for f in os.listdir(p) if os.path.isfile(os.path.join(p, f))]
    files.sort()
    for f in files:
      [e,r]=f.split('.',1)
      if e == 'container':
        continue
      if r != 'html.eco':
        continue
      self.analysisExamples(os.path.join(p, f),
                           os.path.join('./tmp/Examples',et,e), et, e)

  def analysisExamples(self, f, path, et, e):
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

    for c in mc.findall('*'):
      if c.tag == 'h2':
        title1 = c.text
      elif c.tag == 'div':
        c_h4 = pq(c).children('h4')
        if len(c_h4) >= 1:
          pq(c_h4[0]).remove()
        pq(c).children('p').remove()
        # now we analyse pq(c)
        for t in pq(c).find('*'):
          if pq(t).attr('class') == None:
            continue
          cs = pq(t).attr('class').split()
          if len(cs) == 0:
            continue
          last_class = cs[-1]
          if not last_class in self.stat1:
            self.stat1[last_class]=dict()
          if not t.tag in self.stat1[last_class]:
            self.stat1[last_class][t.tag] = {'count': 1, 'cls': set()}
          else:
            self.stat1[last_class][t.tag]['count'] += 1
          self.stat1[last_class][t.tag]['cls'].update(cs[:-1])

  def statistics(self):
    col = set(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
              'violet', 'purple', 'pink', 'brown', 'grey', 'black'])
    num = set(['one', 'two', 'three', 'four', 'five', 'six', 'seven',
              'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
              'fourteen', 'fifteen', 'sixteen'])
    soc = set(['facebook', 'twitter', 'google plus', 'vk', 'linkedin',
               'instagram', 'youtube', 'whatsapp', 'telegram'])
    size = set(['mini', 'tiny', 'small', 'large', 'big',
                'huge', 'massive'])
    for lc in self.stat1:
      for tag in self.stat1[lc]:
        print('> {} {} ({}): '.format(lc,tag,self.stat1[lc][tag]['count']),end='')
        s = self.stat1[lc][tag]['cls']
        if not s.isdisjoint(col):
          s = s - col
          s.add('COLOR')
        if not s.isdisjoint(num):
          s = s - num
          s.add('NUMBER')
        if not s.isdisjoint(soc):
          s = s - soc
          s.add('SOCIAL')
        if not s.isdisjoint(size):
          s = s - size
          s.add('SIZE')
        for c in s:
          print(c+', ',end='')
        print()

def main():
  app = App()
  if not app.checkCWD():
    return

  # Clone source github repository
  if not app.clone():
    print('Error by cloning')
    return

  app.analysis()

  app.statistics()


if __name__== "__main__":
  main()
