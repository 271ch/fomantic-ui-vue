<template>
  <div>
    <FuiItems relaxed>
      <FuiItem>
        <FuiImage tag=div size=tiny src="/images/wireframe/image.png">
        </FuiImage>
        <FuiContent aligned=middle>
          <a class="header">12 Years a Slave</a>
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage tag=div size=tiny src="/images/wireframe/image.png">
        </FuiImage>
        <FuiContent aligned=middle>
          <a class="header">My Neighbor Totoro</a>
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage tag=div size=tiny src="/images/wireframe/image.png">
        </FuiImage>
        <FuiContent aligned=middle>
          <a class="header">Watchmen</a>
        </FuiContent>
      </FuiItem>
    </FuiItems>
  </div>
</template>

<script>
export default {
  name: 'ViewItemRelaxed1',
  info: {
    converted: true,
    elementType: 'views',
    element: 'item',
    title1: 'Variations',
    title2: 'Relaxed',
    description: 'A group of items can relax its padding to provide more negative space',
    model: '    <div class="ui relaxed items">\n' +
      '      <div class="item">\n' +
      '        <div class="ui tiny image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '        <div class="middle aligned content">\n' +
      '          <a class="header">12 Years a Slave</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="ui tiny image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '        <div class="middle aligned content">\n' +
      '          <a class="header">My Neighbor Totoro</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="ui tiny image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '        <div class="middle aligned content">\n' +
      '          <a class="header">Watchmen</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
