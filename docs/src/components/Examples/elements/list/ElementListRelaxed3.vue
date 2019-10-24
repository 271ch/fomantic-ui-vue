<template>
  <div>
    <FuiList relaxed=very>
      <FuiItem>
        <FuiImage src="/images/avatar/small/daniel.jpg" avatar></FuiImage>
        <FuiContent headerA="Daniel Louise">
          <FuiDescription>
            Last seen watching <a><b>Arrested Development</b></a> just now.
          </FuiDescription>
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage src="/images/avatar/small/stevie.jpg" avatar></FuiImage>
        <FuiContent headerA="Stevie Feliciano">
          <FuiDescription>
            Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
          </FuiDescription>
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage src="/images/avatar/small/elliot.jpg" avatar></FuiImage>
        <FuiContent headerA="Elliot Fu">
          <FuiDescription>
            Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
          </FuiDescription>
        </FuiContent>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListRelaxed3',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Variations',
    title2: 'Relaxed',
    description: 'A list can relax its padding to provide more negative space',
    model: '    <div class="ui very relaxed list">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/daniel.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <a class="header">Daniel Louise</a>\n' +
      '          <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/stevie.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <a class="header">Stevie Feliciano</a>\n' +
      '          <div class="description">Last seen watching <a><b>Bob\'s Burgers</b></a> 10 hours ago.</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/elliot.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <a class="header">Elliot Fu</a>\n' +
      '          <div class="description">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
