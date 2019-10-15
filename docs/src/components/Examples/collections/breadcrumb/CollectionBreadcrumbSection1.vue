<template>
  <div>
    <div class="ui breadcrumb">
      <div class="section">Home</div>
      <div class="divider"> / </div>
      <div class="active section">Search</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbSection1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'breadcrumb',
    title1: 'Content',
    title2: 'Section',
    description: 'A breadcrumb can contain sections that can either be formatted as a link or text',
    model: '    <div class="ui breadcrumb">\n' +
      '      <div class="section">Home</div>\n' +
      '      <div class="divider"> / </div>\n' +
      '      <div class="active section">Search</div>\n' +
      '    </div>\n',
  },
};
</script>
