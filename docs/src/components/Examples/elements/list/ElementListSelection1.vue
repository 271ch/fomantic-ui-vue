<template>
  <div>
    <FuiList  aligned=middle selection>
      <FuiItem>
        <FuiImage avatar src="/images/avatar/small/helen.jpg"></FuiImage>
        <FuiContent header="Helen">
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage avatar src="/images/avatar/small/christian.jpg"></FuiImage>
        <FuiContent header="Christian">
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage avatar src="/images/avatar/small/daniel.jpg"></FuiImage>
        <FuiContent header="Daniel">
        </FuiContent>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListSelection1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Variations',
    title2: 'Selection',
    description: 'A selection list formats list items as possible choices',
    model: '    <div class="ui middle aligned selection list">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/helen.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Helen</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/christian.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Christian</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/daniel.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Daniel</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
