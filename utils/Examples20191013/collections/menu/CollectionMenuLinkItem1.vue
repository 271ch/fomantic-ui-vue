<template>
  <div>
    <div class="ui vertical menu">
      <a href="http://www.google.com" class="item">
        Visit Google
      </a>
      <div class="link item">
        Javascript Link
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuLinkItem1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Link Item',
    description: 'A menu may contain a link item, or an item formatted as if it is a link.',
    model: '    <div class="ui vertical menu">\n' +
      '      <a href="http://www.google.com" class="item">\n' +
      '        Visit Google\n' +
      '      </a>\n' +
      '      <div class="link item">\n' +
      '        Javascript Link\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
