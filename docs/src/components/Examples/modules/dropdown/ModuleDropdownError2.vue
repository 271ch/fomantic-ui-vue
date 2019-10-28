<template>
  <div>
      <div class="ui selection dropdown error">
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
  name: 'ModuleDropdownError2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'States',
    title2: 'Error',
    description: 'An errored dropdown can alert a user to a problem',
    model: '      <div class="ui selection dropdown error">\n' +
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
