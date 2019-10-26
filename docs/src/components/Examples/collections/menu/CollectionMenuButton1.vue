<template>
  <div>
    <FuiMenu>
      <FuiItem>
        <FuiButton tag=div primary>Sign up</FuiButton>
      </FuiItem>
      <FuiItem>
        <FuiButton tag=div>Log-in</FuiButton>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuButton1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Button',
    description: 'A menu item can contain a',
    model: '    <div class="ui menu">\n' +
      '      <div class="item">\n' +
      '        <div class="ui primary button">Sign up</div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="ui button">Log-in</div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
