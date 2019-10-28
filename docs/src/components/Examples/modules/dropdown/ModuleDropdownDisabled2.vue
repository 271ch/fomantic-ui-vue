<template>
  <div>
      <div class="ui dropdown">
        Disabled Item <i class="dropdown icon"/>
        <div class="menu">
          <div class="item">Choice 1</div>
          <div class="disabled item">Disabled</div>
          <div class="item">Choice 3</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownDisabled2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'States',
    title2: 'Disabled',
    description: 'A disabled dropdown menu or item does not allow user interaction',
    model: '      <div class="ui dropdown">\n' +
      '        Disabled Item <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">Choice 1</div>\n' +
      '          <div class="disabled item">Disabled</div>\n' +
      '          <div class="item">Choice 3</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
