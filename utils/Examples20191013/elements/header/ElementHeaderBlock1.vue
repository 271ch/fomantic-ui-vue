<template>
  <div>
    <h3 class="ui block header">
      Block Header
    </h3>
    <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderBlock1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'header',
      title1: 'Variations',
      title2: 'Block',
      description: 'A header can be formatted to appear inside a content block',
      model: '    <h3 class="ui block header">\n' +
      '      Block Header\n' +
      '    </h3>\n' +
      '    <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>\n',
    };
  },
};
</script>
