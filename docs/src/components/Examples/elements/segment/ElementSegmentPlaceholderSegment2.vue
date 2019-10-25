<template>
  <div>
    <FuiSegment placeholder>
      <FuiHeader icon iconName=search>
        We don't have any documents matching your query
      </FuiHeader>
      <div class="inline">
        <FuiButton tag=div primary>Clear Query</FuiButton>
        <FuiButton tag=div>Add Document</FuiButton>
      </div>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentPlaceholderSegment2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Types',
    title2: 'Placeholder Segment',
    description: 'A segment can be used to reserve space for conditionally displayed content.',
    model: '    <div class="ui placeholder segment">\n' +
      '      <div class="ui icon header">\n' +
      '        <i class="search icon"></i>\n' +
      '        We don\'t have any documents matching your query\n' +
      '      </div>\n' +
      '      <div class="inline">\n' +
      '        <div class="ui primary button">Clear Query</div>\n' +
      '        <div class="ui button">Add Document</div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
