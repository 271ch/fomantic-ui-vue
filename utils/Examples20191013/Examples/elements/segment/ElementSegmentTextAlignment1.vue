<template>
  <div>
    <div class="ui right aligned segment">
      Right
    </div>
    <div class="ui left aligned segment">
      Left
    </div>
    <div class="ui center aligned segment">
      Center
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentTextAlignment1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Variations',
      title2: 'Text Alignment',
      description: 'A segment can have its text aligned to a side',
      model: '    <div class="ui right aligned segment">\n' +
      '      Right\n' +
      '    </div>\n' +
      '    <div class="ui left aligned segment">\n' +
      '      Left\n' +
      '    </div>\n' +
      '    <div class="ui center aligned segment">\n' +
      '      Center\n' +
      '    </div>\n',
    };
  },
};
</script>
