<template>
  <div>
    <div class="ui vertical menu">
      <div class="item">
        <div class="ui input"><input type="text" placeholder="Search..."/></div>
      </div>
      <div class="item">
        Home
        <div class="menu">
          <a class="active item">Search</a>
          <a class="item">Add</a>
          <a class="item">Remove</a>
        </div>
      </div>
      <a class="item">
        <i class="grid layout icon"/> Browse
      </a>
      <a class="item">
        Messages
      </a>
      <div class="ui dropdown item">
        More
        <i class="dropdown icon"/>
        <div class="menu">
          <a class="item"><i class="edit icon"/> Edit Profile</a>
          <a class="item"><i class="globe icon"/> Choose Language</a>
          <a class="item"><i class="settings icon"/> Account Settings</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuSubMenu1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Sub Menu',
    description: 'A menu item may contain another menu nested inside that acts as a grouped sub-menu.',
    model: '    <div class="ui vertical menu">\n' +
      '      <div class="item">\n' +
      '        <div class="ui input"><input type="text" placeholder="Search..."/></div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        Home\n' +
      '        <div class="menu">\n' +
      '          <a class="active item">Search</a>\n' +
      '          <a class="item">Add</a>\n' +
      '          <a class="item">Remove</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <a class="item">\n' +
      '        <i class="grid layout icon"/> Browse\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Messages\n' +
      '      </a>\n' +
      '      <div class="ui dropdown item">\n' +
      '        More\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '          <a class="item"><i class="edit icon"/> Edit Profile</a>\n' +
      '          <a class="item"><i class="globe icon"/> Choose Language</a>\n' +
      '          <a class="item"><i class="settings icon"/> Account Settings</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
