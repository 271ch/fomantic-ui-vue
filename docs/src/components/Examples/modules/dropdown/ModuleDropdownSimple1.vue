<template>
  <div>
      <div class="ui compact menu">
        <div class="ui simple dropdown item">
          Dropdown
          <i class="dropdown icon"/>
          <div class="menu">
            <div class="item">Choice 1</div>
            <div class="item">Choice 2</div>
            <div class="item">Choice 3</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSimple1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Simple',
    description: 'A simple dropdown can open without Javascript',
    model: '      <div class="ui compact menu">\n' +
      '        <div class="ui simple dropdown item">\n' +
      '          Dropdown\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="menu">\n' +
      '            <div class="item">Choice 1</div>\n' +
      '            <div class="item">Choice 2</div>\n' +
      '            <div class="item">Choice 3</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
