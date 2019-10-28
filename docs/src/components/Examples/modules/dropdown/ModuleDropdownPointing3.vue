<template>
  <div>
      <div class="ui icon top left pointing dropdown button">
        <i class="wrench icon"/>
        <div class="menu">
          <div class="header">Display Density</div>
          <div class="item">Comfortable</div>
          <div class="item">Cozy</div>
          <div class="item">Compact</div>
          <div class="ui divider"/>
          <div class="item">Settings</div>
          <div class="item">
            <i class="dropdown icon"/>
            <span class="text">Upload Settings</span>
            <div class="menu">
              <div class="item">
                <i class="check icon"/>
                Convert Uploaded Files to PDF
              </div>
              <div class="item">
                <i class="check icon"/>
                Digitize Text from Uploaded Files
              </div>
            </div>
          </div>
          <div class="item">Manage Apps</div>
          <div class="item">Keyboard Shortcuts</div>
          <div class="item">Help</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownPointing3',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Pointing',
    description: 'A dropdown can be formatted so that its menu is pointing',
    model: '      <div class="ui icon top left pointing dropdown button">\n' +
      '        <i class="wrench icon"/>\n' +
      '        <div class="menu">\n' +
      '          <div class="header">Display Density</div>\n' +
      '          <div class="item">Comfortable</div>\n' +
      '          <div class="item">Cozy</div>\n' +
      '          <div class="item">Compact</div>\n' +
      '          <div class="ui divider"/>\n' +
      '          <div class="item">Settings</div>\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <span class="text">Upload Settings</span>\n' +
      '            <div class="menu">\n' +
      '              <div class="item">\n' +
      '                <i class="check icon"/>\n' +
      '                Convert Uploaded Files to PDF\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                <i class="check icon"/>\n' +
      '                Digitize Text from Uploaded Files\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="item">Manage Apps</div>\n' +
      '          <div class="item">Keyboard Shortcuts</div>\n' +
      '          <div class="item">Help</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
