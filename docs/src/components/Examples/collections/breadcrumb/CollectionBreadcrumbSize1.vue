<template>
  <div>
    <FuiBreadcrumb size=mini>
      <FuiBCSection>Home</FuiBCSection>
      <FuiBCDivider iconName="right chevron"></FuiBCDivider>
      <FuiBCSection>Registration</FuiBCSection>
      <FuiBCDivider iconName="right chevron"></FuiBCDivider>
      <FuiBCSection tag=div active>Personal Information</FuiBCSection>
    </FuiBreadcrumb>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbSize1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'breadcrumb',
    title1: 'Variations',
    title2: 'Size',
    description: 'A breadcrumb can vary in size',
    model: '    <div class="ui mini breadcrumb">\n' +
      '      <a class="section">Home</a>\n' +
      '      <i class="right chevron icon divider"></i>\n' +
      '      <a class="section">Registration</a>\n' +
      '      <i class="right chevron icon divider"></i>\n' +
      '      <div class="active section">Personal Information</div>\n' +
      '    </div>\n',
  },
};
</script>
