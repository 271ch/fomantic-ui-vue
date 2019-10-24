<template>
  <div>
    <FuiList>
      <FuiItem>
        <FuiImage src="/images/avatar2/small/rachel.png" avatar></FuiImage>
        <FuiContent headerA="Rachel">
          <FuiDescription>Last seen watching <a><b>Arrested Development</b></a> just now.</FuiDescription>
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage src="/images/avatar2/small/lindsay.png" avatar></FuiImage>
        <FuiContent headerA="Lindsay">
          <FuiDescription>Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</FuiDescription>
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage src="/images/avatar2/small/matthew.png" avatar></FuiImage>
        <FuiContent headerA="Matthew">
          <FuiDescription>Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</FuiDescription>
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage src="/images/avatar/small/jenny.jpg" avatar></FuiImage>
        <FuiContent headerA="Jenny Hess">
          <FuiDescription>Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.</FuiDescription>
        </FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage src="/images/avatar/small/veronika.jpg" avatar></FuiImage>
        <FuiContent headerA="Veronika Ossi">
          <FuiDescription>Has not watched anything recently</FuiDescription>
        </FuiContent>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListImage1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Content',
    title2: 'Image',
    description: 'A list item can contain an image',
    model: '    <div class="ui list">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar2/small/rachel.png" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <a class="header">Rachel</a>\n' +
      '          <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar2/small/lindsay.png" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <a class="header">Lindsay</a>\n' +
      '          <div class="description">Last seen watching <a><b>Bob\'s Burgers</b></a> 10 hours ago.</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar2/small/matthew.png" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <a class="header">Matthew</a>\n' +
      '          <div class="description">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/jenny.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <a class="header">Jenny Hess</a>\n' +
      '          <div class="description">Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/avatar/small/veronika.jpg" class="ui avatar image">\n' +
      '        <div class="content">\n' +
      '          <a class="header">Veronika Ossi</a>\n' +
      '          <div class="description">Has not watched anything recently</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
