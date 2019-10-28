<template>
  <div>
      <div class="ui ignored info message">Bottom pointing dropdown menus have sub-menus open upwards</div>
      <div class="ui icon bottom left pointing dropdown button">
        <i class="wrench icon"/>
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
      <div class="ui icon bottom right pointing dropdown button">
        <i class="wrench icon"/>
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
</template>

<script>
export default {
  name: 'ModuleDropdownPointing4',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Pointing',
    description: 'A dropdown can be formatted so that its menu is pointing',
    model: '      <div class="ui ignored info message">Bottom pointing dropdown menus have sub-menus open upwards</div>\n' +
      '      <div class="ui icon bottom left pointing dropdown button">\n' +
      '        <i class="wrench icon"/>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <span class="text">New</span>\n' +
      '            <div class="menu">\n' +
      '              <div class="item">Document</div>\n' +
      '              <div class="item">Image</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="item">Save As...</div>\n' +
      '          <div class="item">Edit</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui icon bottom right pointing dropdown button">\n' +
      '        <i class="wrench icon"/>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <span class="text">New</span>\n' +
      '            <div class="menu">\n' +
      '              <div class="item">Document</div>\n' +
      '              <div class="item">Image</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="item">Save As...</div>\n' +
      '          <div class="item">Edit</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
