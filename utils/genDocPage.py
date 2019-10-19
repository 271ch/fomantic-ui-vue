#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# This script has to be executed in its own folder!

import subprocess
import sys
import os
import os.path
import re
from pyquery import PyQuery as pq

templateBegin = """<template>
  <FuiContainer main>
    <FuiHeader level=1>
      [[1]]
      <FuiHeader sub>
        [[1]] examples
      </FuiHeader>
    </FuiHeader>
"""
#    <ExampleWithSource example="ElementButtonButton1"></ExampleWithSource>
templateEnd = """  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('[[2]]', '[[3]]', '');

export default {
  name: 'Page[[1]]',
  components: {
    ExampleWithSource,
  },
};
</script>"""


def convQuote(str):
  return str.replace('\'', '\\\'')
def convQuoteCR(str):
  return convQuote(str).replace('\n', '').strip()

class App:
  def genDocPage(self, et, e):
    lines = open(os.path.join('./Examples','examples.js'),'r').readlines()
    comps = []
    pattern = 'import {}{}{}{}'.format(et[0].upper(),et[1:],
                                       e[0].upper(),e[1:])
    for l in lines:
      if l.startswith(pattern):
        ll = l.split(' ', 2)
        if len(ll) != 3:
          continue
        comps.append(ll[1])
    out = templateBegin
    for c in comps:
      out += '    <ExampleWithSource example="{}"></ExampleWithSource>\n'.format(c)
    out += templateEnd
    out = out.replace('[[1]]', e[0].upper()+e[1:]).replace('[[2]]', et+'s').replace('[[3]]', e)
    # print(out)

    outFile = os.path.join('./Pages','Page{}{}.vue'.format(e[0].upper(),e[1:]))
    if os.path.isfile(outFile):
      print('File {} already exits. If you want to replace it, delete it first.'.format(outFile))
    else:
      fo = open(outFile,'w')
      fo.write(out)
      fo.close()


  def help(self):
    print('in doc/src/components execute:')
    print('python3 genDocPage.py [element type] [element]')

def main():
  app = App()
  if len(sys.argv) != 3:
    app.help()
    return
  app.genDocPage(sys.argv[1], sys.argv[2])



if __name__== "__main__":
  main()
