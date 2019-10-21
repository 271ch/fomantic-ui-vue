#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import subprocess
import sys
import os
import os.path
import re


source = './tmp/Fomantic-UI-Docs/server/documents/elements/icon.html.eco'

d = {}

def getFile1(title1,title2,descr,exp):
  global d
  comp = 'ElementIcon' + title2.replace(' ','').replace('&','')
  if comp in d:
    d[comp] += 1
  else:
    d[comp] = 1
  comp = comp + str(d[comp])
  print(comp)
  out = '<template>\n  <div>\n'
  for e in exp:
    out += '    {}\n'.format(e)
  out += '  </div>\n</template>\n\n<script>\n'
  out += 'export default {\n'
  out += '  name: \'{}\',\n'.format(comp)
  out += '  info: {\n'
  out += '    converted: true,\n'
  out += '    elementType: \'elements\',\n'
  out += '    element: \'icon\',\n'
  out += '    title1: \'{}\',\n'.format(title1)
  out += '    title2: \'{}\',\n'.format(title2)
  out += '    description: \'{}\',\n'.format(descr)
  out += '    model: `'
  for e in exp:
    out += '{}\n'.format(e)
  out += '`,\n'
  out += '  },\n'
  out += '};\n'
  out += '</script>\n'
  fo = open(os.path.join('./tmp',comp + '.vue'),'w')
  fo.write(out)
  fo.close()


title1 = '???'
descr2 = '???'
exp = []
started = False
lines = open(source,'r').readlines()
n = 0
for line in lines:
  n += 1
  if n<6835:
    continue
  line = line.strip()
  # print(line)
  if line.startswith('<h2 class="ui dividing'):
    title1 = line[31:-5]
    continue
  if line.startswith('<h4'):
    title2 = line[22:-5]
    continue
  if line.startswith('<p>'):
    descr = line[3:-4]
    continue
  if 'example"' in line:
    started = True
    continue
  if started and line == '</div>':
    started = False
    getFile1(title1,title2,descr,exp)
    exp = []
  if started:
    exp.append(line)
