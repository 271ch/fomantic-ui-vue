<template>
  <div>
    <div class="ui disabled move reveal">
      <div class="visible content">
        <img src="/images/wireframe/square-image.png" class="ui small image"/>
      </div>
      <div class="hidden content">
        <img src="/images/avatar/large/chris.jpg" class="ui small image"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealDisabled1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'reveal',
    title1: 'States',
    title2: 'Disabled',
    description: 'A disabled reveal will not animate when hovered',
    model: '    <div class="ui disabled move reveal">\n' +
      '      <div class="visible content">\n' +
      '        <img src="/images/wireframe/square-image.png" class="ui small image"/>\n' +
      '      </div>\n' +
      '      <div class="hidden content">\n' +
      '        <img src="/images/avatar/large/chris.jpg" class="ui small image"/>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
