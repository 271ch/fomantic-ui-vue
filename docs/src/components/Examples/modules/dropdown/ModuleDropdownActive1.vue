<template>
  <div>
      <div class="ui ignored info message">An active state will only automatically open a <code>ui simple dropdown</code>. To activate a normal dropdown use <code>$('.ui.dropdown').dropdown('show');</code></div>
      <div class="ui simple active dropdown">
        Dropdown <i class="dropdown icon"/>
        <div class="menu">
          <div class="item">Choice 1</div>
          <div class="item">Choice 2</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownActive1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'States',
    title2: 'Active',
    description: 'An active dropdown has its menu open',
    model: '      <div class="ui ignored info message">An active state will only automatically open a <code>ui simple dropdown</code>. To activate a normal dropdown use <code>$(\'.ui.dropdown\').dropdown(\'show\');</code></div>\n' +
      '      <div class="ui simple active dropdown">\n' +
      '        Dropdown <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">Choice 1</div>\n' +
      '          <div class="item">Choice 2</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
