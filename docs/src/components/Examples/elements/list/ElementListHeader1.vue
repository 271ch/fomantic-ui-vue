<template>
  <div>
    <FuiList>
      <FuiItem header="New York City">
        A lovely city
      </FuiItem>
      <FuiItem header="Chicago">
        Also quite a lovely city
      </FuiItem>
      <FuiItem header="Los Angeles">
        Sometimes can be a lovely city
      </FuiItem>
      <FuiItem header="San Francisco">
        What a lovely city
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListHeader1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Content',
    title2: 'Header',
    description: 'A list item can contain a header',
    model: '    <div class="ui list">\n' +
      '      <div class="item">\n' +
      '        <div class="header">New York City</div>\n' +
      '        A lovely city\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="header">Chicago</div>\n' +
      '        Also quite a lovely city\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="header">Los Angeles</div>\n' +
      '        Sometimes can be a lovely city\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="header">San Francisco</div>\n' +
      '        What a lovely city\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
