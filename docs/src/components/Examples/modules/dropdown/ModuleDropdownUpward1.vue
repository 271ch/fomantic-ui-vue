<template>
  <div>
      <div class="code" data-demo="true">
        $('.upward.example .dropdown')
          .dropdown({
            direction: 'upward'
          })
        ;
      </div>
      <div class="ui top attached segment">
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
      </div>
      <div class="ui bottom attached menu">
        <div class="ui upward dropdown item">
          <i class="settings icon"/>
          <div class="menu">
            <div class="item">
              <i class="dropdown icon"/>
              <span class="text">New</span>
              <div class="menu">
                <div class="item">Document</div>
                <div class="item">Image</div>
              </div>
            </div>
            <div class="item">Save As...</div>
            <div class="item">Edit</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownUpward1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Selection Dropdowns',
    title2: 'Upward',
    description: 'A dropdown menu will automatically change which direction it opens if it can\'t fit on screen. If you need a dropdown to open in a specific direction you can specify it when initializing a dropdown.',
    model: '      <div class="code" data-demo="true">\n' +
      '        $(\'.upward.example .dropdown\')\n' +
      '          .dropdown({\n' +
      '            direction: \'upward\'\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="ui top attached segment">\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached menu">\n' +
      '        <div class="ui upward dropdown item">\n' +
      '          <i class="settings icon"/>\n' +
      '          <div class="menu">\n' +
      '            <div class="item">\n' +
      '              <i class="dropdown icon"/>\n' +
      '              <span class="text">New</span>\n' +
      '              <div class="menu">\n' +
      '                <div class="item">Document</div>\n' +
      '                <div class="item">Image</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="item">Save As...</div>\n' +
      '            <div class="item">Edit</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
