<template>
  <div>
      <div class="ui dropdown">
        <div class="text">File</div>
        <i class="dropdown icon"/>
        <div class="menu">
          <div class="item">New</div>
          <div class="item">
            <span class="description">ctrl + o</span>
            Open...
          </div>
          <div class="item">
            <span class="description">ctrl + s</span>
            Save as...
          </div>
          <div class="item">
            <span class="description">ctrl + r</span>
            Rename
          </div>
          <div class="item">Make a copy</div>
          <div class="item">
            <i class="folder icon"/>
            Move to folder
          </div>
          <div class="item">
            <i class="trash icon"/>
            Move to trash
          </div>
          <div class="divider"/>
          <div class="item">Download As...</div>
          <div class="item">
            <i class="dropdown icon"/>
            Publish To Web
            <div class="menu">
              <div class="item">Google Docs</div>
              <div class="item">Google Drive</div>
              <div class="item">Dropbox</div>
              <div class="item">Adobe Creative Cloud</div>
              <div class="item">Private FTP</div>
              <div class="item">Another Service...</div>
            </div>
          </div>
          <div class="item">E-mail Collaborators</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownDropdown1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Dropdown',
    description: 'A dropdown',
    model: '      <div class="ui dropdown">\n' +
      '        <div class="text">File</div>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">New</div>\n' +
      '          <div class="item">\n' +
      '            <span class="description">ctrl + o</span>\n' +
      '            Open...\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <span class="description">ctrl + s</span>\n' +
      '            Save as...\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <span class="description">ctrl + r</span>\n' +
      '            Rename\n' +
      '          </div>\n' +
      '          <div class="item">Make a copy</div>\n' +
      '          <div class="item">\n' +
      '            <i class="folder icon"/>\n' +
      '            Move to folder\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <i class="trash icon"/>\n' +
      '            Move to trash\n' +
      '          </div>\n' +
      '          <div class="divider"/>\n' +
      '          <div class="item">Download As...</div>\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            Publish To Web\n' +
      '            <div class="menu">\n' +
      '              <div class="item">Google Docs</div>\n' +
      '              <div class="item">Google Drive</div>\n' +
      '              <div class="item">Dropbox</div>\n' +
      '              <div class="item">Adobe Creative Cloud</div>\n' +
      '              <div class="item">Private FTP</div>\n' +
      '              <div class="item">Another Service...</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="item">E-mail Collaborators</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
