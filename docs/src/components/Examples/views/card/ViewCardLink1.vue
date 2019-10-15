<template>
  <div>
    <div class="ui ignored info message">To make the entire content of a card link, check out the link variation below
    </div>
    <div class="ui card">
      <a class="image" href="#">
        <img src="/images/avatar/large/steve.jpg"/>
      </a>
      <div class="content">
        <a class="header" href="#">Steve Jobes</a>
        <div class="meta">
          <a>Last Seen 2 days ago</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardLink1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'card',
    title1: 'Content',
    title2: 'Link',
    description: 'A card can contain contain links as images, headers, or inside content',
    model: '    <div class="ui ignored info message">To make the entire content of a card link, check out the link variation below\n' +
      '    </div>\n' +
      '    <div class="ui card">\n' +
      '      <a class="image" href="#">\n' +
      '        <img src="/images/avatar/large/steve.jpg"/>\n' +
      '      </a>\n' +
      '      <div class="content">\n' +
      '        <a class="header" href="#">Steve Jobes</a>\n' +
      '        <div class="meta">\n' +
      '          <a>Last Seen 2 days ago</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
