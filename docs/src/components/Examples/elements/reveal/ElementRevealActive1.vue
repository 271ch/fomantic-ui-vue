<template>
  <div>
    <div class="ui ignored info message">
      Adding the class <code>active</code> can allow you to show the hidden contents programatically
    </div>
    <div class="ui active move left reveal">
      <div class="visible content">
        <img src="/images/wireframe/square-image.png" class="ui small image"/>
      </div>
      <div class="hidden content">
        <img src="/images/avatar/large/nan.jpg" class="ui small image"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealActive1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'reveal',
    title1: 'States',
    title2: 'Active',
    description: 'An active reveal displays its hidden content',
    model: '    <div class="ui ignored info message">\n' +
      '      Adding the class <code>active</code> can allow you to show the hidden contents programatically\n' +
      '    </div>\n' +
      '    <div class="ui active move left reveal">\n' +
      '      <div class="visible content">\n' +
      '        <img src="/images/wireframe/square-image.png" class="ui small image"/>\n' +
      '      </div>\n' +
      '      <div class="hidden content">\n' +
      '        <img src="/images/avatar/large/nan.jpg" class="ui small image"/>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
