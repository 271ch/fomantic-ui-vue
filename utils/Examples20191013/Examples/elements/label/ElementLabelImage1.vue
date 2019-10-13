<template>
  <div>
    <a class="ui image label">
      <img src="/images/avatar/small/joe.jpg"/>
      Joe
    </a>
    <a class="ui image label">
      <img src="/images/avatar/small/elliot.jpg"/>
      Elliot
    </a>
    <a class="ui image label">
      <img src="/images/avatar/small/stevie.jpg"/>
      Stevie
    </a>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelImage1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Types',
      title2: 'Image',
      description: 'A label can be formatted to emphasize an image',
      model: '    <a class="ui image label">\n' +
      '      <img src="/images/avatar/small/joe.jpg"/>\n' +
      '      Joe\n' +
      '    </a>\n' +
      '    <a class="ui image label">\n' +
      '      <img src="/images/avatar/small/elliot.jpg"/>\n' +
      '      Elliot\n' +
      '    </a>\n' +
      '    <a class="ui image label">\n' +
      '      <img src="/images/avatar/small/stevie.jpg"/>\n' +
      '      Stevie\n' +
      '    </a>\n',
    };
  },
};
</script>
