<template>
  <div>
    <div class="ui segment">
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentSegment1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Types',
      title2: 'Segment',
      description: 'A segment of content',
      model: '    <div class="ui segment">\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
