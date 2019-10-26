<template>
  <div>
    <FuiMenu secondary >
      <FuiItem a active>
        Home
      </FuiItem>
      <FuiItem a>
        Messages
      </FuiItem>
      <FuiItem a>
        Friends
      </FuiItem>
      <FuiMenu sub right>
        <FuiItem>
          <FuiInput icon placeholder="Search...">
            <FuiIcon name=search link></FuiIcon>
          </FuiInput>
        </FuiItem>
        <FuiItem a>
          Logout
        </FuiItem>
      </FuiMenu>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuSecondaryMenu1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Secondary Menu',
    description: 'A menu can adjust its appearance to de-emphasize its contents',
    model: '    <div class="ui secondary menu">\n' +
      '      <a class="active item">\n' +
      '        Home\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Messages\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Friends\n' +
      '      </a>\n' +
      '      <div class="right menu">\n' +
      '        <div class="item">\n' +
      '          <div class="ui icon input">\n' +
      '            <input type="text" placeholder="Search...">\n' +
      '            <i class="search link icon"></i>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <a class="item">\n' +
      '          Logout\n' +
      '        </a>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
