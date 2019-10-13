<template>
  <div>
    <a class="ui label">
      <img class="ui right spaced avatar image" src="/images/avatar/small/elliot.jpg"/>
      Elliot
    </a>
    <a class="ui label">
      <img src="/images/avatar/small/stevie.jpg"/>
      Stevie
    </a>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelImage1A',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Content',
      title2: 'Image',
      description: 'A label can include an image',
      model: '    <a class="ui label">\n' +
      '      <img class="ui right spaced avatar image" src="/images/avatar/small/elliot.jpg"/>\n' +
      '      Elliot\n' +
      '    </a>\n' +
      '    <a class="ui label">\n' +
      '      <img src="/images/avatar/small/stevie.jpg"/>\n' +
      '      Stevie\n' +
      '    </a>\n',
    };
  },
};
</script>
