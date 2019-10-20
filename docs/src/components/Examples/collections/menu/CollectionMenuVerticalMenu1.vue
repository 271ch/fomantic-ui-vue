<template>
  <div>
    <div class="ui ignore warning message">A vertical menu's width defaults to an arbitrary size. To have it fit your content more precisely use the fluid variation in conjunction with <a href="grid.html">ui grid</a>.</div>
    <div class="ui vertical menu">
      <a class="active teal item">
        Inbox
        <div class="ui teal left pointing label">1</div>
      </a>
      <a class="item">
        Spam
        <div class="ui label">51</div>
      </a>
      <a class="item">
        Updates
        <div class="ui label">1</div>
      </a>
      <div class="item">
        <div class="ui transparent icon input">
          <input type="text" placeholder="Search mail..."/>
          <i class="search icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuVerticalMenu1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Vertical Menu',
    description: 'A vertical menu displays elements vertically..',
    model: '    <div class="ui ignore warning message">A vertical menu\'s width defaults to an arbitrary size. To have it fit your content more precisely use the fluid variation in conjunction with <a href="grid.html">ui grid</a>.</div>\n' +
      '    <div class="ui vertical menu">\n' +
      '      <a class="active teal item">\n' +
      '        Inbox\n' +
      '        <div class="ui teal left pointing label">1</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Spam\n' +
      '        <div class="ui label">51</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Updates\n' +
      '        <div class="ui label">1</div>\n' +
      '      </a>\n' +
      '      <div class="item">\n' +
      '        <div class="ui transparent icon input">\n' +
      '          <input type="text" placeholder="Search mail..."/>\n' +
      '          <i class="search icon"></i>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
