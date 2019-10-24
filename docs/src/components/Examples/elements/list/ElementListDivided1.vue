<template>
  <div>
    <FuiList aligned=middle divided>
      <FuiItem>
        <FuiImage src="/images/avatar/small/daniel.jpg" avatar></FuiImage>
        <FuiContent headerA="Daniel Louise"></FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage src="/images/avatar/small/stevie.jpg" avatar></FuiImage>
        <FuiContent headerA="Stevie Feliciano"></FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage src="/images/avatar/small/elliot.jpg" avatar></FuiImage>
        <FuiContent headerA="Elliot Fu"></FuiContent>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListDivided1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Variations',
    title2: 'Divided',
    description: 'A list can show divisions between content',
    model: '    <div class="ui middle aligned divided list">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/daniel.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <a class="header">Daniel Louise</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/stevie.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <a class="header">Stevie Feliciano</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/elliot.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <a class="header">Elliot Fu</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
