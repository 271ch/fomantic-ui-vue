<template>
  <div>
    <div class="ui ignored info message">
      To use inline-block content inside a placeholder, wrap the content in <code>inline</code>.
    </div>
    <div class="ui placeholder segment">
      <div class="ui icon header">
        <i class="search icon"/>
        We don't have any documents matching your query
      </div>
      <div class="inline">
        <div class="ui primary button">Clear Query</div>
        <div class="ui button">Add Document</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentPlaceholderSegment2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Types',
      title2: 'Placeholder Segment',
      description: 'A segment can be used to reserve space for conditionally displayed content.',
      model: '    <div class="ui ignored info message">\n' +
      '      To use inline-block content inside a placeholder, wrap the content in <code>inline</code>.\n' +
      '    </div>\n' +
      '    <div class="ui placeholder segment">\n' +
      '      <div class="ui icon header">\n' +
      '        <i class="search icon"/>\n' +
      '        We don\'t have any documents matching your query\n' +
      '      </div>\n' +
      '      <div class="inline">\n' +
      '        <div class="ui primary button">Clear Query</div>\n' +
      '        <div class="ui button">Add Document</div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
