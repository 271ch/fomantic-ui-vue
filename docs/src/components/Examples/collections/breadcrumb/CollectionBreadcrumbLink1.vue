<template>
  <div>
    <FuiBreadcrumb>
      <FuiBCSection>Home</FuiBCSection>
      <FuiBCDivider> / </FuiBCDivider>
      <FuiBCSection tag=div active>Search for: <a href="#">paper towels</a></FuiBCSection>
    </FuiBreadcrumb>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbLink1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'breadcrumb',
    title1: 'Content',
    title2: 'Link',
    description: 'A section may be linkable or contain a link',
    model: '    <div class="ui breadcrumb">\n' +
      '      <a class="section">Home</a>\n' +
      '      <div class="divider"> / </div>\n' +
      '      <div class="active section">Search for: <a href="#">paper towels</a></div>\n' +
      '    </div>\n',
  },
};
</script>
