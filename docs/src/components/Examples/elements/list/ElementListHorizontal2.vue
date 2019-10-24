<template>
  <div>
    <FuiList ordered horizontal>
      <FuiItem>
        <FuiImage avatar src="/images/avatar/small/tom.jpg"></FuiImage>
        <FuiContent header="Steve Jobes">
          50 Points
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage avatar src="/images/avatar/small/stevie.jpg"></FuiImage>
        <FuiContent header="Stevie Feliciano">
          44 Points
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage avatar src="/images/avatar/small/jenny.jpg"></FuiImage>
        <FuiContent header="Jenny Hess">
          11 Points
        </FuiContent>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListHorizontal2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Variations',
    title2: 'Horizontal',
    description: 'A list can be formatted to have items appear horizontally',
    model: '    <div class="ui ordered horizontal list">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/tom.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Steve Jobes</div>\n' +
      '          50 Points\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/stevie.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Stevie Feliciano</div>\n' +
      '          44 Points\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/jenny.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Jenny Hess</div>\n' +
      '          11 Points\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
