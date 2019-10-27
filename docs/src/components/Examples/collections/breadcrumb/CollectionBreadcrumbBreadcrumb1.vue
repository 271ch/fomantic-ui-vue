<template>
  <div>
    <FuiBreadcrumb>
      <FuiBCSection>Home</FuiBCSection>
      <FuiBCDivider> / </FuiBCDivider>
      <FuiBCSection>Store</FuiBCSection>
      <FuiBCDivider> / </FuiBCDivider>
      <FuiBCSection tag=div active>T-Shirt</FuiBCSection>
    </FuiBreadcrumb>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbBreadcrumb1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'breadcrumb',
    title1: 'Types',
    title2: 'Breadcrumb',
    description: 'A standard breadcrumb',
    model: '    <div class="ui breadcrumb">\n' +
      '      <a class="section">Home</a>\n' +
      '      <div class="divider"> / </div>\n' +
      '      <a class="section">Store</a>\n' +
      '      <div class="divider"> / </div>\n' +
      '      <div class="active section">T-Shirt</div>\n' +
      '    </div>\n',
  },
};
</script>
