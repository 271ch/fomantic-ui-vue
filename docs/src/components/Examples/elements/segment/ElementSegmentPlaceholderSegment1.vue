<template>
  <div>
    <FuiSegment placeholder>
      <FuiHeader icon iconName="pdf file outline">
        No documents are listed for this customer.
      </FuiHeader>
      <FuiButton tag=div primary>Add Document</FuiButton>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentPlaceholderSegment1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Types',
    title2: 'Placeholder Segment',
    description: 'A segment can be used to reserve space for conditionally displayed content.',
    model: '    <div class="ui placeholder segment">\n' +
      '      <div class="ui icon header">\n' +
      '        <i class="pdf file outline icon"></i>\n' +
      '        No documents are listed for this customer.\n' +
      '      </div>\n' +
      '      <div class="ui primary button">Add Document</div>\n' +
      '    </div>\n',
  },
};
</script>
