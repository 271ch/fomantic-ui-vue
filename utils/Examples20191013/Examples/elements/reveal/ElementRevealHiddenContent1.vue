<template>
  <div>
    <div class="ui small fade reveal image">
      <img class="visible content" src="/images/wireframe/square-image.png"/>
      <img class="hidden content" src="/images/avatar/large/ade.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealHiddenContent1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'reveal',
      title1: 'Content',
      title2: 'Hidden Content',
      description: 'A reveal may contain content that is hidden before user interaction',
      model: '    <div class="ui small fade reveal image">\n' +
      '      <img class="visible content" src="/images/wireframe/square-image.png"/>\n' +
      '      <img class="hidden content" src="/images/avatar/large/ade.jpg"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
