#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import subprocess
import sys
import os
import os.path
import re


source = './tmp/Fomantic-UI-Docs/server/documents/elements/icon.html.eco'

def extract1(e):
  # <div class="column"><i class="accessible icon" data-search-terms="accessibility, handicap, person, wheelchair, wheelchair-alt"></i>accessible</div>
  # 1: icon name
  # 2: data serach
  # 3: test
  m = re.match(r".*<i class=\"([^\"]*) icon\" (data-search-terms=\"[^\"]*\")></i>([^<]*)</div>", e)
  if m != None:
    return m.groups()
  else:
    return ['','','']


def getFile1(title,descr,exp):
  comp = 'ElementIcon' + title.replace(' ','').replace('&','') + '1'
  print(comp)
  out = '<template>\n  <div>\n    <FuiGrid doubling column=five>\n'
  for e in exp:
    ee = extract1(e)
    out += '      <FuiColumn>\n        <FuiIcon name="{}" size=big {}></FuiIcon>\n        {}\n      </FuiColumn>\n'.format(ee[0],ee[1],ee[2])
  out += '    </FuiGrid>\n  </div>\n</template>\n\n<script>\n'
  out += 'export default {\n'
  out += '  name: \'{}\',\n'.format(comp)
  out += '  info: {\n'
  out += '    converted: true,\n'
  out += '    elementType: \'elements\',\n'
  out += '    element: \'icon\',\n'
  out += '    title1: \'Icon Sets\',\n'
  out += '    title2: \'{}\',\n'.format(title)
  out += '    description: \'{}\',\n'.format(descr)
  out += '    model: `<div class="ui doubling five column grid">\n'
  for e in exp:
    ee = extract1(e)
    out += '  <div class="column">\n'
    out += '    <i class="big {} icon" {}></i>\n'.format(ee[0],ee[1])
    out += '    {}\n'.format(ee[2])
    out += '  </div>\n'
  out += '</div>`,\n'
  out += '  },\n'
  out += '};\n'
  out += '</script>\n'
  fo = open(os.path.join('./tmp',comp + '.vue'),'w')
  fo.write(out)
  fo.close()


title = '???'
descr = '???'
exp = []
started = False
lines = open(source,'r').readlines()
n = 0
for line in lines:
  n += 1
  if n<40 or n>6835:
    continue
  line = line.strip()
  # print(line)
  if line.startswith('<h4'):
    title = line[22:-5]
  if line.startswith('<p>'):
    descr = line[3:-4]
  if 'ui doubling five column grid' in line:
    started = True
  if started and line.startswith('</div>'):
    started = False
    getFile1(title,descr,exp)
    title = '???'
    descr = '???'
    exp = []
  if started and '<div class="column">' in line:
    exp.append(line)
