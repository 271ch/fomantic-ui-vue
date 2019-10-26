<template>
  <div>
    <FuiMenu vertical>
      <FuiItem a href="http://www.google.com">
        Visit Google
      </FuiItem>
      <FuiItem link>
        Javascript Link
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuLinkItem1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Link Item',
    description: 'A menu may contain a link item, or an item formatted as if it is a link.',
    model: '    <div class="ui vertical menu">\n' +
      '      <a class="item" href="http://www.google.com">\n' +
      '        Visit Google\n' +
      '      </a>\n' +
      '      <div class="link item">\n' +
      '        Javascript Link\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
