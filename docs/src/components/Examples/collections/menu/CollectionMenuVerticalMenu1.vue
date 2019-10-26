<template>
  <div>
    <FuiMenu vertical>
      <FuiItem a active color=teal>
        Inbox
        <FuiLabel color=teal pointing=left>1</FuiLabel>
      </FuiItem>
      <FuiItem a>
        Spam
        <FuiLabel>51</FuiLabel>
      </FuiItem>
      <FuiItem a>
        Updates
        <FuiLabel>1</FuiLabel>
      </FuiItem>
      <FuiItem>
        <FuiInput transparent icon placeholder="Search mail...">
          <FuiIcon name=search></FuiIcon>
        </FuiInput>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuVerticalMenu1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Vertical Menu',
    description: 'A vertical menu displays elements vertically..',
    model: '    <div class="ui vertical menu">\n' +
      '      <a class="active teal item">\n' +
      '        Inbox\n' +
      '        <div class="ui left pointing teal label">1</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Spam\n' +
      '        <div class="ui label">51</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Updates\n' +
      '        <div class="ui label">1</div>\n' +
      '      </a>\n' +
      '      <div class="item">\n' +
      '        <div class="ui transparent icon input">\n' +
      '          <input type="text" placeholder="Search mail...">\n' +
      '          <i class="search icon"></i>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
