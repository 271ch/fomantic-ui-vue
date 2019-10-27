<template>
  <div>
    <FuiBreadcrumb>
      <FuiBCSection tag=div>Home</FuiBCSection>
      <FuiBCDivider> / </FuiBCDivider>
      <FuiBCSection tag=div active>Search</FuiBCSection>
    </FuiBreadcrumb>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbSection1',
  info: {
    converted: true,
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
