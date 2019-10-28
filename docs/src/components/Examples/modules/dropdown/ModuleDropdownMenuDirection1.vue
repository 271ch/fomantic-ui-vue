<template>
  <div>
      <div class="ui ignored info message">
        Specifying <code>left</code> on a menu will make all child menus open in the same direction implicitly. To have a dropdown icon appear on the left side on a child menu, you will need to use <code>left dropdown example</code>
      </div>
      <div class="ui floating labeled icon dropdown button">
        <i class="dropdown icon"/>
        <span class="text">Menu</span>
        <div class="menu">
          <div class="item">
            <i class="left dropdown icon"/>
            <span class="text">Left</span>
            <div class="left menu">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
          <div class="item">
            <i class="dropdown icon"/>
            <span class="text">Right</span>
            <div class="right menu">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownMenuDirection1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Variations',
    title2: 'Menu Direction',
    description: 'A dropdown menu or sub-menu can specify the direction it should open',
    model: '      <div class="ui ignored info message">\n' +
      '        Specifying <code>left</code> on a menu will make all child menus open in the same direction implicitly. To have a dropdown icon appear on the left side on a child menu, you will need to use <code>left dropdown example</code>\n' +
      '      </div>\n' +
      '      <div class="ui floating labeled icon dropdown button">\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <span class="text">Menu</span>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">\n' +
      '            <i class="left dropdown icon"/>\n' +
      '            <span class="text">Left</span>\n' +
      '            <div class="left menu">\n' +
      '              <div class="item">1</div>\n' +
      '              <div class="item">2</div>\n' +
      '              <div class="item">3</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <span class="text">Right</span>\n' +
      '            <div class="right menu">\n' +
      '              <div class="item">1</div>\n' +
      '              <div class="item">2</div>\n' +
      '              <div class="item">3</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
