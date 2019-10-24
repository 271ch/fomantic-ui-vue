<template>
  <div>
    <FuiList celled>
      <FuiItem>
        <FuiImage src="/images/avatar/small/helen.jpg" avatar></FuiImage>
        <FuiContent header="Snickerdoodle">
          An excellent companion
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage src="/images/avatar/small/daniel.jpg" avatar></FuiImage>
        <FuiContent header="Poodle">
          A poodle, its pretty basic
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage src="/images/avatar/small/daniel.jpg" avatar></FuiImage>
        <FuiContent header="Paulo">
          He's also a dog
        </FuiContent>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListCelled1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Variations',
    title2: 'Celled',
    description: 'A list can divide its items into cells',
    model: '    <div class="ui celled list">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/helen.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Snickerdoodle</div>\n' +
      '          An excellent companion\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/daniel.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Poodle</div>\n' +
      '          A poodle, its pretty basic\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/daniel.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Paulo</div>\n' +
      '          He\'s also a dog\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
