#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys
import re
import os

template = """<template>
  <div :class="classes()">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
// import Mixins from '../../lib/mixins';

export default {
  name: 'Fui[[1]]',
  mixins: [],
  props: {
    /*
    prop1: { // TODO: Component Fui[[1]]
      type: Boolean,
      description: '',
    },
    prop2: {
      type: String,
      description: '',
      default: '',
    },
    prop3: {
      type: String,
      description: '',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
    },
    */
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  methods: {
    classes: function () {
      return u.concatClasses(
        '[[2]]'
      );
    },
  },
};
</script>
"""

class Converter:

  def __init__(self):
    self._first_cap_re = re.compile(r'(.)([A-Z][a-z]+)')
    self._all_cap_re   = re.compile('([a-z0-9])([A-Z])')

  def dashToCamel(self, snake_cased_str):
    return self._convertToCamel(snake_cased_str, "-")


  def _convertToCamel(self, snake_cased_str, separator):
    components = snake_cased_str.split(separator)
    preffix    = ""
    suffix     = ""
    if components[0] == "":
      components = components[1:]
      preffix    = separator
    if components[-1] == "":
      components = components[:-1]
      suffix     = separator
    if len(components) > 1:
      camelCasedStr = components[0].lower()
      for x in components[1:]:
        if x.isupper() or x.istitle():
          camelCasedStr += x
        else:
          camelCasedStr += x.title()
    else:
      camelCasedStr = components[0]
    return preffix + camelCasedStr + suffix

class App:
  "..."
  stat1 = dict()

  def genVueComponent(self,name,path,cl):
    conv = Converter()

    t = template \
      .replace('[[1]]',(conv.dashToCamel('a-'+name))[1:]) \
      .replace('[[2]]',cl)
    f = open(os.path.join(path,name+'.vue'),'w')
    f.write(t)
    f.close()

  def help(self):
    print('python3 genVueComp.py [comp-name w/o Fui] [path] [last class]')


def main():
  app = App()
  if len(sys.argv) != 4:
    app.help()
    return
  app.genVueComponent(sys.argv[1], sys.argv[2], sys.argv[3])

if __name__== "__main__":
  main()
