<template>
  <div>
      <div class="ui floating labeled icon dropdown button">
        <i class="dropdown icon"/>
        <span class="text">Menu</span>
        <div class="left menu">
          <div class="item">
            <i class="dropdown icon"/>
            <span class="text">Left</span>
            <div class="menu">
              <div class="item">
                <i class="dropdown icon"/>
                <span class="text">Still Left</span>
                <div class="menu">
                  <div class="item">1</div>
                  <div class="item">2</div>
                  <div class="item">3</div>
                </div>
              </div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
          <div class="item">
            <i class="dropdown icon"/>
            <span class="text">Left 2</span>
            <div class="menu">
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
  name: 'ModuleDropdownMenuDirection2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Variations',
    title2: 'Menu Direction',
    description: 'A dropdown menu or sub-menu can specify the direction it should open',
    model: '      <div class="ui floating labeled icon dropdown button">\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <span class="text">Menu</span>\n' +
      '        <div class="left menu">\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <span class="text">Left</span>\n' +
      '            <div class="menu">\n' +
      '              <div class="item">\n' +
      '                <i class="dropdown icon"/>\n' +
      '                <span class="text">Still Left</span>\n' +
      '                <div class="menu">\n' +
      '                  <div class="item">1</div>\n' +
      '                  <div class="item">2</div>\n' +
      '                  <div class="item">3</div>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '              <div class="item">2</div>\n' +
      '              <div class="item">3</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <span class="text">Left 2</span>\n' +
      '            <div class="menu">\n' +
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
