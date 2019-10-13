<template>
  <div>
<!--     <div class="ui ignored warning message">
      Due to issues with <a href="https://github.com/philipwalton/flexbugs#5-column-flex-items-dont-always-preserve-intrinsic-aspect-ratios" target="_blank">intrinsic aspect ratio in flexbox</a> <code>img</code> should use a container element.
    </div> -->
    <div class="ui list">
      <div class="item">
        <img class="ui avatar image" src="/images/avatar2/small/rachel.png"/>
        <div class="content">
          <a class="header">Rachel</a>
          <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar2/small/lindsay.png"/>
        <div class="content">
          <a class="header">Lindsay</a>
          <div class="description">Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar2/small/matthew.png"/>
        <div class="content">
          <a class="header">Matthew</a>
          <div class="description">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"/>
        <div class="content">
          <a class="header">Jenny Hess</a>
          <div class="description">Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/veronika.jpg"/>
        <div class="content">
          <a class="header">Veronika Ossi</a>
          <div class="description">Has not watched anything recently</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListImage1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Content',
      title2: 'Image',
      description: 'A list item can contain an image',
      model: '<!--     <div class="ui ignored warning message">\n' +
      '      Due to issues with <a href="https://github.com/philipwalton/flexbugs#5-column-flex-items-dont-always-preserve-intrinsic-aspect-ratios" target="_blank">intrinsic aspect ratio in flexbox</a> <code>img</code> should use a container element.\n' +
      '    </div> -->\n' +
      '    <div class="ui list">\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar2/small/rachel.png"/>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Rachel</a>\n' +
      '          <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar2/small/lindsay.png"/>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Lindsay</a>\n' +
      '          <div class="description">Last seen watching <a><b>Bob\'s Burgers</b></a> 10 hours ago.</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar2/small/matthew.png"/>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Matthew</a>\n' +
      '          <div class="description">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Jenny Hess</a>\n' +
      '          <div class="description">Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/veronika.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Veronika Ossi</a>\n' +
      '          <div class="description">Has not watched anything recently</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
