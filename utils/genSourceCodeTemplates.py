#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# go to: docs/src/components/Examples
# and: python3 ../../../../utils/genSourceCodeTemplates.py

import subprocess
import os
import os.path
import re
from pyquery import PyQuery as pq

def convQuote(str):
  return str.replace('\'', '\\\'')
def convQuoteCR(str):
  if len(str)>=4 and str[:4] == '    ':
    return convQuote(str[4:]).replace('\n', '')
  else:
    return convQuote(str).replace('\n', '')

class App:
  "This is my second class"
  a = 10

  def generate(self):
    self.codeFile = open('sourceCodeTemplates.js','w')
    self.codeFile.write('let s = {};\n')
    for root, dirs, files in os.walk("."):
      for file in files:
        if not file.endswith(".vue"):
          continue
        f = os.path.join(root, file)
        self.codeFile.write('s.{} = \n'.format(os.path.splitext(file)[0]))

        lines = open(f, 'r').readlines()
        line = 0
        for l in lines:
          line += 1
          if l.startswith('</template>'):
            break;
        if len(lines) == line:
          print('No end of template for {}'.format(file))
          continue
        n = 0
        for l in lines[2:line-2]:
          n += 1
          self.codeFile.write(
            '  \'{}{}\' {}\n'.format(convQuoteCR(l),
                                     '' if (n==line-4) else r'\n',
                                     '' if (n==line-4) else '+'))

    self.codeFile.write('export default s\n')
    self.codeFile.close()



def main():
  app = App()

  app.generate()


if __name__== "__main__":
  main()
