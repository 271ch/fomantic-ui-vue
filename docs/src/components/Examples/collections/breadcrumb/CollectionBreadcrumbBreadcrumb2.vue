<template>
  <div>
    <FuiBreadcrumb>
      <FuiBCSection>Home</FuiBCSection>
      <FuiBCDivider iconName="right angle"></FuiBCDivider>
      <FuiBCSection>Store</FuiBCSection>
      <FuiBCDivider iconName="right angle"></FuiBCDivider>
      <FuiBCSection tag=div active>T-Shirt</FuiBCSection>
    </FuiBreadcrumb>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbBreadcrumb2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'breadcrumb',
    title1: 'Types',
    title2: 'Breadcrumb',
    description: 'A standard breadcrumb',
    model: '    <div class="ui breadcrumb">\n' +
      '      <a class="section">Home</a>\n' +
      '      <i class="right angle icon divider"></i>\n' +
      '      <a class="section">Store</a>\n' +
      '      <i class="right angle icon divider"></i>\n' +
      '      <div class="active section">T-Shirt</div>\n' +
      '    </div>\n',
  },
};
</script>
