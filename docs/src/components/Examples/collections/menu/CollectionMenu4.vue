<template>
  <div>
    <div class="ui massive vertical menu">
      <a class="active item">
        <div class="ui small teal label">1</div>
        Inbox
      </a>
      <a class="item">
        <div class="ui small label">51</div>
        Spam
      </a>
      <a class="item">
        <div class="ui small label">1</div>
        Updates
      </a>
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search mail..."/>
          <i class="search icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenu4',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: '???',
    description: 'A vertical menu can also vary in size',
    model: '    <div class="ui massive vertical menu">\n' +
      '      <a class="active item">\n' +
      '        <div class="ui small teal label">1</div>\n' +
      '        Inbox\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <div class="ui small label">51</div>\n' +
      '        Spam\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <div class="ui small label">1</div>\n' +
      '        Updates\n' +
      '      </a>\n' +
      '      <div class="item">\n' +
      '        <div class="ui icon input">\n' +
      '          <input type="text" placeholder="Search mail..."/>\n' +
      '          <i class="search icon"></i>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
