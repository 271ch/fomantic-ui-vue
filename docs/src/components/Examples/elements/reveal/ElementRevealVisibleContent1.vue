<template>
  <div>
    <div class="ui ignored info message">
      Visible and hidden content should be the same aspect ratio
    </div>
    <div class="ui small fade reveal image">
      <img src="/images/avatar/large/ade.jpg" class="visible content">
      <img src="/images/wireframe/square-image.png" class="hidden content">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealVisibleContent1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'reveal',
    title1: 'Content',
    title2: 'Visible Content',
    description: 'A reveal may contain content that is visible before interaction',
    model: '    <div class="ui ignored info message">\n' +
      '      Visible and hidden content should be the same aspect ratio\n' +
      '    </div>\n' +
      '    <div class="ui small fade reveal image">\n' +
      '      <img src="/images/avatar/large/ade.jpg" class="visible content">\n' +
      '      <img src="/images/wireframe/square-image.png" class="hidden content">\n' +
      '    </div>\n',
  },
};
</script>
