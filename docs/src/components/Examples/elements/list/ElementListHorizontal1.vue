<template>
  <div>
    <FuiList horizontal>
      <FuiItem>
        <FuiImage avatar src="/images/avatar/small/tom.jpg"></FuiImage>
        <div class="content">
          <div class="header">Tom</div>
          Top Contributor
        </div>
      </FuiItem>
      <FuiItem>
        <FuiImage avatar src="/images/avatar/small/christian.jpg"></FuiImage>
        <FuiContent header="Christian Rocha">
          Admin
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage avatar src="/images/avatar/small/matt.jpg"></FuiImage>
        <FuiContent header="Matt">
          Top Rated User
        </FuiContent>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListHorizontal1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Variations',
    title2: 'Horizontal',
    description: 'A list can be formatted to have items appear horizontally',
    model: '    <div class="ui horizontal list">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/tom.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Tom</div>\n' +
      '          Top Contributor\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/christian.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Christian Rocha</div>\n' +
      '          Admin\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/matt.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <div class="header">Matt</div>\n' +
      '          Top Rated User\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
