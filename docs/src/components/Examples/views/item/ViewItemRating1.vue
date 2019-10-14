<template>
  <div>
    <div class="ui ignored info message">
      You can use the <a href="/modules/rating.html">rating</a> component to attach events to like and favorite icons
    </div>
    <div class="ui items">
      <div class="item">
        <a class="ui tiny image">
          <img src="/images/avatar/large/jenny.jpg"/>
        </a>
        <div class="middle aligned content">
          <div class="header">
            <i class="like icon"/>
            Veronika Ossi
          </div>
        </div>
      </div>
      <div class="item">
        <a class="ui tiny image">
          <img src="/images/avatar/large/justen.jpg"/>
        </a>
        <div class="middle aligned content">
          <div class="header">
            <i class="favorite icon"/>
            Justen Kitsune
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewItemRating1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'item',
    title1: 'Content',
    title2: 'Rating',
    description: 'An item can contain icons signifying a \'like\' or \'favorite\' action',
    model: '    <div class="ui ignored info message">\n' +
      '      You can use the <a href="/modules/rating.html">rating</a> component to attach events to like and favorite icons\n' +
      '    </div>\n' +
      '    <div class="ui items">\n' +
      '      <div class="item">\n' +
      '        <a class="ui tiny image">\n' +
      '          <img src="/images/avatar/large/jenny.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="middle aligned content">\n' +
      '          <div class="header">\n' +
      '            <i class="like icon"/>\n' +
      '            Veronika Ossi\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <a class="ui tiny image">\n' +
      '          <img src="/images/avatar/large/justen.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="middle aligned content">\n' +
      '          <div class="header">\n' +
      '            <i class="favorite icon"/>\n' +
      '            Justen Kitsune\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
