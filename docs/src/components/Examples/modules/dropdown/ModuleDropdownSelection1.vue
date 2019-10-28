<template>
  <div>
      <div class="ui ignored info message">
        Selection dropdowns can be initialized directly on a <code>select</code> or with the matching HTML and a hidden <code>input</code>.
      </div>
      <div class="ui selection dropdown">
        <input type="hidden" name="gender"/>
        <i class="dropdown icon"/>
        <div class="default text">Gender</div>
        <div class="menu">
          <div class="item" data-value="1">Male</div>
          <div class="item" data-value="0">Female</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSelection1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Selection',
    description: 'A dropdown can be used to select between choices in a form',
    model: '      <div class="ui ignored info message">\n' +
      '        Selection dropdowns can be initialized directly on a <code>select</code> or with the matching HTML and a hidden <code>input</code>.\n' +
      '      </div>\n' +
      '      <div class="ui selection dropdown">\n' +
      '        <input type="hidden" name="gender"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Gender</div>\n' +
      '        <div class="menu">\n' +
      '          <div class="item" data-value="1">Male</div>\n' +
      '          <div class="item" data-value="0">Female</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
