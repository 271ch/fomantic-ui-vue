<template>
  <div>
    <FuiList ordered>
      <FuiItem a>Getting Started</FuiItem>
      <FuiItem a>Introduction</FuiItem>
      <FuiItem>
        <a>Languages</a>
        <FuiList sub>
          <FuiItem a>HTML</FuiItem>
          <FuiItem a>Javascript</FuiItem>
          <FuiItem a>CSS</FuiItem>
        </FuiList>
      </FuiItem>
      <FuiItem a>Review</FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListOrdered1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Types',
    title2: 'Ordered',
    description: 'A list can be ordered numerically',
    model: '    <div class="ui ordered list">\n' +
      '      <a class="item">Getting Started</a>\n' +
      '      <a class="item">Introduction</a>\n' +
      '      <div class="item">\n' +
      '        <a>Languages</a>\n' +
      '        <div class="list">\n' +
      '          <a class="item">HTML</a>\n' +
      '          <a class="item">Javascript</a>\n' +
      '          <a class="item">CSS</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <a class="item">Review</a>\n' +
      '    </div>\n',
  },
};
</script>
