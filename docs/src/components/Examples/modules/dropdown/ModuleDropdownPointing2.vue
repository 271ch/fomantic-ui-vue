<template>
  <div>
      <div class="ui vertical menu">
        <a class="item">
          Home
        </a>
        <div class="ui left pointing dropdown link item">
          <i class="dropdown icon"/>
          Messages
          <div class="menu">
            <div class="item">Inbox</div>
            <div class="item">Starred</div>
            <div class="item">Sent Mail</div>
            <div class="item">Drafts (143)</div>
            <div class="divider"/>
            <div class="item">Spam (1009)</div>
            <div class="item">Trash</div>
          </div>
        </div>
        <a class="item">
          Browse
        </a>
        <a class="item">
          Help
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownPointing2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Pointing',
    description: 'A dropdown can be formatted so that its menu is pointing',
    model: '      <div class="ui vertical menu">\n' +
      '        <a class="item">\n' +
      '          Home\n' +
      '        </a>\n' +
      '        <div class="ui left pointing dropdown link item">\n' +
      '          <i class="dropdown icon"/>\n' +
      '          Messages\n' +
      '          <div class="menu">\n' +
      '            <div class="item">Inbox</div>\n' +
      '            <div class="item">Starred</div>\n' +
      '            <div class="item">Sent Mail</div>\n' +
      '            <div class="item">Drafts (143)</div>\n' +
      '            <div class="divider"/>\n' +
      '            <div class="item">Spam (1009)</div>\n' +
      '            <div class="item">Trash</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <a class="item">\n' +
      '          Browse\n' +
      '        </a>\n' +
      '        <a class="item">\n' +
      '          Help\n' +
      '        </a>\n' +
      '      </div>\n',
  },
};
</script>
