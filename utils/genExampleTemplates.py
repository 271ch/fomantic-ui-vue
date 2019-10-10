#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# This script has to be executed in its own folder!

import subprocess
import os
import os.path
from pyquery import PyQuery as pq

ElementTypes = ['elements', 'collections', 'views', 'modules']

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
    subprocess.call(['mkdir', 'tmp/output'])
    for et in ElementTypes:
      print('> {}'.format(et))
      self.generateElementType(et)

  def generateElementType(self, et):
    if not os.path.isdir(os.path.join('./tmp/output',et)):
      subprocess.call(['mkdir', os.path.join('./tmp/output',et)])
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
      if not os.path.isdir(os.path.join('./tmp/output',et,e)):
        subprocess.call(['mkdir', os.path.join('./tmp/output',et,e)])
      self.extractExamples(os.path.join(p, f), os.path.join('./tmp/output',et,e))
      
  def extractExamples(self, f, path):
    print(' extract {} in {}'.format(f,path))
    lines = open(f, 'r').readlines()
    index = 0
    for l in lines:
      if l.startswith(r'<div'):
        break
      index += 1
    lines = lines[index:]

    d = pq(''.join(lines))
    

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
