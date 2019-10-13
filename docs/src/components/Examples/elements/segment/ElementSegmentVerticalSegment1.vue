<template>
  <div>
    <div class="ui vertical segment">
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
    </div>
    <div class="ui vertical segment">
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
    </div>
    <div class="ui vertical segment">
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentVerticalSegment1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Types',
      title2: 'Vertical Segment',
      description: 'A vertical segment formats content to be aligned as part of a vertical group',
      model: '    <div class="ui vertical segment">\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '    </div>\n' +
      '    <div class="ui vertical segment">\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '    </div>\n' +
      '    <div class="ui vertical segment">\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
