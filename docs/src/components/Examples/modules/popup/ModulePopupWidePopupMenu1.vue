<template>
  <div>
      <div class="evaluated code">
      $('.example .menu .browse')
        .popup({
          inline     : true,
          hoverable  : true,
          position   : 'bottom left',
          delay: {
            show: 300,
            hide: 800
          }
        })
      ;
      </div>
      <div class="ui menu">
        <a class="browse item">
          Browse
          <i class="dropdown icon"/>
        </a>
        <div class="ui fluid popup">
          <div class="ui four column relaxed divided grid">
            <div class="column">
              <h4 class="ui header">Fabrics</h4>
              <div class="ui link list">
                <a class="item">Cashmere</a>
                <a class="item">Linen</a>
                <a class="item">Cotton</a>
                <a class="item">Viscose</a>
              </div>
            </div>
            <div class="column">
              <h4 class="ui header">Size</h4>
              <div class="ui link list">
                <a class="item">Small</a>
                <a class="item">Medium</a>
                <a class="item">Large</a>
                <a class="item">Plus Sizes</a>
              </div>
            </div>
            <div class="column">
              <h4 class="ui header">Colors</h4>
              <div class="ui link list">
                <a class="item">Neutrals</a>
                <a class="item">Brights</a>
                <a class="item">Pastels</a>
              </div>
            </div>
            <div class="column">
              <h4 class="ui header">Types</h4>
              <div class="ui link list">
                <a class="item">Knitwear</a>
                <a class="item">Outerwear</a>
                <a class="item">Pants</a>
                <a class="item">Shoes</a>
              </div>
            </div>
          </div>
        </div>
        <a class="item">
          <i class="cart icon"/>
          Checkout
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupWidePopupMenu1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Examples',
    title2: 'Wide Popup Menu',
    description: '???',
    model: '      <div class="evaluated code">\n' +
      '      $(\'.example .menu .browse\')\n' +
      '        .popup({\n' +
      '          inline     : true,\n' +
      '          hoverable  : true,\n' +
      '          position   : \'bottom left\',\n' +
      '          delay: {\n' +
      '            show: 300,\n' +
      '            hide: 800\n' +
      '          }\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui menu">\n' +
      '        <a class="browse item">\n' +
      '          Browse\n' +
      '          <i class="dropdown icon"/>\n' +
      '        </a>\n' +
      '        <div class="ui fluid popup">\n' +
      '          <div class="ui four column relaxed divided grid">\n' +
      '            <div class="column">\n' +
      '              <h4 class="ui header">Fabrics</h4>\n' +
      '              <div class="ui link list">\n' +
      '                <a class="item">Cashmere</a>\n' +
      '                <a class="item">Linen</a>\n' +
      '                <a class="item">Cotton</a>\n' +
      '                <a class="item">Viscose</a>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="column">\n' +
      '              <h4 class="ui header">Size</h4>\n' +
      '              <div class="ui link list">\n' +
      '                <a class="item">Small</a>\n' +
      '                <a class="item">Medium</a>\n' +
      '                <a class="item">Large</a>\n' +
      '                <a class="item">Plus Sizes</a>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="column">\n' +
      '              <h4 class="ui header">Colors</h4>\n' +
      '              <div class="ui link list">\n' +
      '                <a class="item">Neutrals</a>\n' +
      '                <a class="item">Brights</a>\n' +
      '                <a class="item">Pastels</a>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="column">\n' +
      '              <h4 class="ui header">Types</h4>\n' +
      '              <div class="ui link list">\n' +
      '                <a class="item">Knitwear</a>\n' +
      '                <a class="item">Outerwear</a>\n' +
      '                <a class="item">Pants</a>\n' +
      '                <a class="item">Shoes</a>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <a class="item">\n' +
      '          <i class="cart icon"/>\n' +
      '          Checkout\n' +
      '        </a>\n' +
      '      </div>\n',
  },
};
</script>
