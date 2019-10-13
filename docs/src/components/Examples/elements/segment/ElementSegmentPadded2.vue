<template>
  <div>
    <div class="ui very padded segment">
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentPadded2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Variations',
      title2: 'Padded',
      description: 'A segment can increase its padding',
      model: '    <div class="ui very padded segment">\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
