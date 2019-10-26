<template>
  <div>
    <FuiMenu vertical>
      <FuiItem>
        <FuiInput placeholder="Search..."></FuiInput>
      </FuiItem>
      <FuiItem>
        Home
        <FuiMenu sub>
          <FuiItem a active>Search</FuiItem>
          <FuiItem a>Add</FuiItem>
          <FuiItem a>Remove</FuiItem>
        </FuiMenu>
      </FuiItem>
      <FuiItem a>
        <FuiIcon name="grid layout"></FuiIcon> Browse
      </FuiItem>
      <FuiItem a>
        Messages
      </FuiItem>
      <FuiItem dropdown>
        More
        <FuiIcon name=dropdown></FuiIcon>
        <FuiMenu sub>
          <FuiItem a><FuiIcon name=edit></FuiIcon> Edit Profile</FuiItem>
          <FuiItem a><FuiIcon name=globe></FuiIcon> Choose Language</FuiItem>
          <FuiItem a><FuiIcon name=settings></FuiIcon> Account Settings</FuiItem>
        </FuiMenu>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuSubMenu1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Sub Menu',
    description: 'A menu item may contain another menu nested inside that acts as a grouped sub-menu.',
    model: '    <div class="ui vertical menu">\n' +
      '      <div class="item">\n' +
      '        <div class="ui input"><input type="text" placeholder="Search..."></div>\n' +
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
      '        <i class="grid layout icon"></i> Browse\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Messages\n' +
      '      </a>\n' +
      '      <div class="ui dropdown item">\n' +
      '        More\n' +
      '        <i class="dropdown icon"></i>\n' +
      '        <div class="menu">\n' +
      '          <a class="item"><i class="edit icon"></i> Edit Profile</a>\n' +
      '          <a class="item"><i class="globe icon"></i> Choose Language</a>\n' +
      '          <a class="item"><i class="settings icon"></i> Account Settings</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
