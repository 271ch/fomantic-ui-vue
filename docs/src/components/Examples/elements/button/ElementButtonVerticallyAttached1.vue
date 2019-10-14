<template>
  <div>
    <div class="ui top attached button" tabindex="0">Top</div>
    <div class="ui attached segment">
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
    </div>
    <div class="ui bottom attached button" tabindex="0">Bottom</div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonVerticallyAttached1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'button',
    title1: 'Variations',
    title2: 'Vertically Attached',
    description: 'A button can be attached to the top or bottom of other content',
    model: '    <div class="ui top attached button" tabindex="0">Top</div>\n' +
      '    <div class="ui attached segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '    </div>\n' +
      '    <div class="ui bottom attached button" tabindex="0">Bottom</div>\n',
  },
};
</script>
