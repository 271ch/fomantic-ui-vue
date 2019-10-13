<template>
  <div>
    <div class="ui placeholder segment">
      <div class="ui icon header">
        <i class="pdf file outline icon"/>
        No documents are listed for this customer.
      </div>
      <div class="ui primary button">Add Document</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentPlaceholderSegment1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Types',
      title2: 'Placeholder Segment',
      description: 'A segment can be used to reserve space for conditionally displayed content.',
      model: '    <div class="ui placeholder segment">\n' +
      '      <div class="ui icon header">\n' +
      '        <i class="pdf file outline icon"/>\n' +
      '        No documents are listed for this customer.\n' +
      '      </div>\n' +
      '      <div class="ui primary button">Add Document</div>\n' +
      '    </div>\n',
    };
  },
};
</script>
