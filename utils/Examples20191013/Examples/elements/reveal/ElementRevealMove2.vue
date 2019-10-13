<template>
  <div>
    <div class="ui move right reveal small image">
      <div class="visible content">
        <img src="/images/wireframe/square-image.png" class="ui small image"/>
      </div>
      <div class="hidden content">
        <img src="/images/avatar/large/jenny.jpg" class="ui small image"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealMove2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'reveal',
      title1: 'Types',
      title2: 'Move',
      description: 'An element can move in a direction to reveal content',
      model: '    <div class="ui move right reveal small image">\n' +
      '      <div class="visible content">\n' +
      '        <img src="/images/wireframe/square-image.png" class="ui small image"/>\n' +
      '      </div>\n' +
      '      <div class="hidden content">\n' +
      '        <img src="/images/avatar/large/jenny.jpg" class="ui small image"/>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
