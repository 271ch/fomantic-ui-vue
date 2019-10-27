<template>
  <div>
    <FuiBreadcrumb>
      <FuiBCSection>Products</FuiBCSection>
      <FuiBCDivider> / </FuiBCDivider>
      <FuiBCSection tag=div active>Paper Towels</FuiBCSection>
    </FuiBreadcrumb>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbActive1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'breadcrumb',
    title1: 'States',
    title2: 'Active',
    description: 'A section can be active',
    model: '    <div class="ui breadcrumb">\n' +
      '      <a class="section">Products</a>\n' +
      '      <div class="divider"> / </div>\n' +
      '      <div class="active section">Paper Towels</div>\n' +
      '    </div>\n',
  },
};
</script>
