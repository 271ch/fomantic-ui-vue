<template>
  <div>
    <div class="ui card">
      <div class="content">
        <i class="right floated like icon"/>
        <i class="right floated star icon"/>
        <div class="header">Cute Dog</div>
        <div class="description">
          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">
        </div>
      </div>
      <div class="extra content">
        <span class="left floated like">
          <i class="like icon"/>
          Like
        </span>
        <span class="right floated star">
          <i class="star icon"/>
          Favorite
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardApproval1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'card',
    title1: 'Content',
    title2: 'Approval',
    description: 'A card can contain a like or star action.',
    model: '    <div class="ui card">\n' +
      '      <div class="content">\n' +
      '        <i class="right floated like icon"/>\n' +
      '        <i class="right floated star icon"/>\n' +
      '        <div class="header">Cute Dog</div>\n' +
      '        <div class="description">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="extra content">\n' +
      '        <span class="left floated like">\n' +
      '          <i class="like icon"/>\n' +
      '          Like\n' +
      '        </span>\n' +
      '        <span class="right floated star">\n' +
      '          <i class="star icon"/>\n' +
      '          Favorite\n' +
      '        </span>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
