<template>
  <div>
    <FuiMenu size=mini>
      <FuiItem a active>
        Home
      </FuiItem>
      <FuiItem a>
        Messages
      </FuiItem>
      <FuiMenu sub right>
        <FuiItem dropdown>
          Language <FuiIcon name=dropdown></FuiIcon>
          <FuiMenu sub>
            <FuiItem a>English</FuiItem>
            <FuiItem a>Russian</FuiItem>
            <FuiItem a>Spanish</FuiItem>
          </FuiMenu>
        </FuiItem>
        <FuiItem>
            <div class="ui primary button">Sign Up</div>
        </FuiItem>
      </FuiMenu>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuSize1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Size',
    description: 'A menu can vary in size',
    model: '    <div class="ui mini menu">\n' +
      '      <a class="active item">\n' +
      '        Home\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Messages\n' +
      '      </a>\n' +
      '      <div class="right menu">\n' +
      '        <div class="ui dropdown item">\n' +
      '          Language <i class="dropdown icon"></i>\n' +
      '          <div class="menu">\n' +
      '            <a class="item">English</a>\n' +
      '            <a class="item">Russian</a>\n' +
      '            <a class="item">Spanish</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="item">\n' +
      '            <div class="ui primary button">Sign Up</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
