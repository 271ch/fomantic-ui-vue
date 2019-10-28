<template>
  <div>
      <div class="ui loading dropdown">
        Dropdown <i class="dropdown icon"/>
        <div class="menu">
          <div class="item">Choice 1</div>
          <div class="item">Choice 2</div>
          <div class="item">Choice 3</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownLoading1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'States',
    title2: 'Loading',
    description: 'A dropdown can show that it is currently loading data',
    model: '      <div class="ui loading dropdown">\n' +
      '        Dropdown <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">Choice 1</div>\n' +
      '          <div class="item">Choice 2</div>\n' +
      '          <div class="item">Choice 3</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
