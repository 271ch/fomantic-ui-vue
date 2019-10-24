<template>
  <div>
    <FuiList>
      <FuiItem headerA="Header">
        <FuiDescription>
          Click a link in our <a>description</a>.
        </FuiDescription>
      </FuiItem>
      <FuiItem headerA="Learn More">
        <FuiDescription>
          Learn more about this site on <a>our FAQ page</a>.
        </FuiDescription>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListLink2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Content',
    title2: 'Link',
    description: 'A list can contain links',
    model: '    <div class="ui list">\n' +
      '      <div class="item">\n' +
      '        <a class="header">Header</a>\n' +
      '        <div class="description">\n' +
      '          Click a link in our <a>description</a>.\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <a class="header">Learn More</a>\n' +
      '        <div class="description">\n' +
      '          Learn more about this site on <a>our FAQ page</a>.\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
