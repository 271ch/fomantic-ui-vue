<template>
  <div>
    <div class="ui small fade reveal image">
      <img src="/images/wireframe/square-image.png" class="visible content">
      <img class="hidden content" src="/images/avatar/large/ade.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealHiddenContent1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'reveal',
    title1: 'Content',
    title2: 'Hidden Content',
    description: 'A reveal may contain content that is hidden before user interaction',
    model: '    <div class="ui small fade reveal image">\n' +
      '      <img src="/images/wireframe/square-image.png" class="visible content">\n' +
      '      <img class="hidden content" src="/images/avatar/large/ade.jpg"/>\n' +
      '    </div>\n',
  },
};
</script>
