<template>
  <div>
    <h4 class="ui horizontal left aligned divider header">
      <i class="left align icon"/>
      Left Aligned
    </h4>
    <h4 class="ui horizontal divider header">
      <i class="center align icon"/>
      Center Aligned
    </h4>
    <h4 class="ui horizontal right aligned divider header">
      <i class="right align icon"/>
      Right Aligned
    </h4>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerHorizontalAlignment1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'divider',
      title1: 'Types',
      title2: 'Horizontal Alignment',
      description: 'A horizontal divider can be aligned',
      model: '    <h4 class="ui horizontal left aligned divider header">\n' +
      '      <i class="left align icon"/>\n' +
      '      Left Aligned\n' +
      '    </h4>\n' +
      '    <h4 class="ui horizontal divider header">\n' +
      '      <i class="center align icon"/>\n' +
      '      Center Aligned\n' +
      '    </h4>\n' +
      '    <h4 class="ui horizontal right aligned divider header">\n' +
      '      <i class="right align icon"/>\n' +
      '      Right Aligned\n' +
      '    </h4>\n',
    };
  },
};
</script>
