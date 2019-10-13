<template>
  <div>
    <div class="ui yellow message">
      <i class="star icon"/>
      To make the entire content of an item link, check out the link variation below
    </div>
    <div class="ui items">
      <div class="item">
        <a class="ui tiny image">
          <img src="/images/avatar/large/stevie.jpg"/>
        </a>
        <div class="content">
          <a class="header">Stevie Feliciano</a>
          <div class="description">
            <p>Stevie Feliciano is a <a>library scientist</a> living in New York City. She likes to spend her time reading, running, and writing.</p>
          </div>
        </div>
      </div>
      <div class="item">
        <a class="ui tiny image">
          <img src="/images/avatar/large/veronika.jpg"/>
        </a>
        <div class="content">
          <a class="header">Veronika Ossi</a>
          <div class="description">
            <p>Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.</p>
          </div>
        </div>
      </div>
      <div class="item">
        <a class="ui tiny image">
          <img src="/images/avatar/large/jenny.jpg"/>
        </a>
        <div class="content">
          <a class="header">Jenny Hess</a>
          <div class="description">
            <p>Jenny is a student studying Media Management at <a>the New School</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewItemLink1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'item',
      title1: 'Content',
      title2: 'Link',
      description: 'An item can contain links as images, headers, or inside content',
      model: '    <div class="ui yellow message">\n' +
      '      <i class="star icon"/>\n' +
      '      To make the entire content of an item link, check out the link variation below\n' +
      '    </div>\n' +
      '    <div class="ui items">\n' +
      '      <div class="item">\n' +
      '        <a class="ui tiny image">\n' +
      '          <img src="/images/avatar/large/stevie.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Stevie Feliciano</a>\n' +
      '          <div class="description">\n' +
      '            <p>Stevie Feliciano is a <a>library scientist</a> living in New York City. She likes to spend her time reading, running, and writing.</p>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <a class="ui tiny image">\n' +
      '          <img src="/images/avatar/large/veronika.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Veronika Ossi</a>\n' +
      '          <div class="description">\n' +
      '            <p>Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.</p>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <a class="ui tiny image">\n' +
      '          <img src="/images/avatar/large/jenny.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Jenny Hess</a>\n' +
      '          <div class="description">\n' +
      '            <p>Jenny is a student studying Media Management at <a>the New School</a>.</p>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
