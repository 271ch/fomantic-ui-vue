<template>
  <div>
    <FuiMenu>
      <FuiItem a>Browse</FuiItem>
      <FuiItem a>Submit</FuiItem>
      <FuiMenu sub right>
        <FuiItem a>Sign Up</FuiItem>
        <FuiItem a>Help</FuiItem>
      </FuiMenu>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuMenu1A',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Menu',
    description: 'A menu may contain another menu group in the same level as menu items.',
    model: '    <div class="ui menu">\n' +
      '      <a class="item">Browse</a>\n' +
      '      <a class="item">Submit</a>\n' +
      '      <div class="right menu">\n' +
      '        <a class="item">Sign Up</a>\n' +
      '        <a class="item">Help</a>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
