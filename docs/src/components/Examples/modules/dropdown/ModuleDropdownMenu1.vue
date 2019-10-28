<template>
  <div>
        <div class="ui menu">
          <a class="item">
            Home
          </a>
          <a class="ui dropdown item">
            Messages
            <i class="dropdown icon"/>
            <div class="menu">
              <div class="item">
                <i class="dropdown icon"/>
                <span class="text">Categories</span>
                <div class="menu">
                  <div class="item">Unread</div>
                  <div class="item">Promotions</div>
                  <div class="item">Updates</div>
                </div>
              </div>
              <div class="item">Archive</div>
            </div>
          </a>
          <a class="item">
            Browse
          </a>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownMenu1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Coupling',
    title2: 'Menu',
    description: 'A',
    model: '        <div class="ui menu">\n' +
      '          <a class="item">\n' +
      '            Home\n' +
      '          </a>\n' +
      '          <a class="ui dropdown item">\n' +
      '            Messages\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <div class="menu">\n' +
      '              <div class="item">\n' +
      '                <i class="dropdown icon"/>\n' +
      '                <span class="text">Categories</span>\n' +
      '                <div class="menu">\n' +
      '                  <div class="item">Unread</div>\n' +
      '                  <div class="item">Promotions</div>\n' +
      '                  <div class="item">Updates</div>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '              <div class="item">Archive</div>\n' +
      '            </div>\n' +
      '          </a>\n' +
      '          <a class="item">\n' +
      '            Browse\n' +
      '          </a>\n' +
      '        </div>\n',
  },
};
</script>
