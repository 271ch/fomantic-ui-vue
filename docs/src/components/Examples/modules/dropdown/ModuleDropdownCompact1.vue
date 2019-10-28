<template>
  <div>
      <div class="ui compact selection dropdown">
        <i class="dropdown icon"/>
        <div class="text">Compact</div>
        <div class="menu">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item">C</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownCompact1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Variations',
    title2: 'Compact',
    description: 'A compact dropdown has no minimum width',
    model: '      <div class="ui compact selection dropdown">\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="text">Compact</div>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">A</div>\n' +
      '          <div class="item">B</div>\n' +
      '          <div class="item">C</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
