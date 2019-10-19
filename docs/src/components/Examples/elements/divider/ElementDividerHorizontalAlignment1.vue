<template>
  <div>
    <FuiHeader level=4 aligned=left horizontal divider>
      <FuiIcon name="left align"></FuiIcon>
      Left Aligned
    </FuiHeader>
    <FuiHeader level=4 horizontal divider>
      <FuiIcon name="center align"></FuiIcon>
      Center Aligned
    </FuiHeader>
    <FuiHeader level=4 aligned=right horizontal divider>
      <FuiIcon name="right align"></FuiIcon>
      Right Aligned
    </FuiHeader>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerHorizontalAlignment1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'divider',
    title1: 'Types',
    title2: 'Horizontal Alignment',
    description: 'A horizontal divider can be aligned',
    model: '    <h4 class="ui horizontal left aligned divider header">\n' +
      '      <i class="left align icon"></i>\n' +
      '      Left Aligned\n' +
      '    </h4>\n' +
      '    <h4 class="ui horizontal divider header">\n' +
      '      <i class="center align icon"></i>\n' +
      '      Center Aligned\n' +
      '    </h4>\n' +
      '    <h4 class="ui horizontal right aligned divider header">\n' +
      '      <i class="right align icon"></i>\n' +
      '      Right Aligned\n' +
      '    </h4>\n',
  },
};
</script>
