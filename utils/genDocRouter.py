#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# This script has to be executed in its own folder!

import subprocess
import sys
import os
import os.path
import re
from pyquery import PyQuery as pq

def convQuote(str):
  return str.replace('\'', '\\\'')
def convQuoteCR(str):
  return convQuote(str).replace('\n', '').strip()

class App:
  def genDocRouter(self, et):
    mainPath = os.path.join('./Examples',et+'s')
    dirs = [d for d in os.listdir(mainPath)
            if os.path.isdir(os.path.join(mainPath, d))]
    dirs.sort()
    print(dirs)
    for d in dirs:
      print('<router-link to="/{}">{}{}</router-link>,'.format(d,d[0].upper(),d[1:]))
    for d in dirs:
      print("import Page{}{} from './Pages/Page{}{}'".format(d[0].upper(),d[1:],d[0].upper(),d[1:]))
    for d in dirs:
      print("{{ path: '/{}', component: Page{}{} }},".format(d,d[0].upper(),d[1:]))



  def help(self):
    print('in doc/src/components execute:')
    print('python3 genDocRouter.py [element type]')

def main():
  app = App()
  if len(sys.argv) != 2:
    app.help()
    return
  app.genDocRouter(sys.argv[1])



if __name__== "__main__":
  main()
