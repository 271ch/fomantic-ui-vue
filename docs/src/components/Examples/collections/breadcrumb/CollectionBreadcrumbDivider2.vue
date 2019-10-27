<template>
  <div>
    <FuiBreadcrumb>
      <FuiBCSection>Home</FuiBCSection>
      <FuiBCDivider iconName="right chevron"></FuiBCDivider>
      <FuiBCSection>Registration</FuiBCSection>
      <FuiBCDivider iconName="right arrow"></FuiBCDivider>
      <FuiBCSection tag=div active>Personal Information</FuiBCSection>
    </FuiBreadcrumb>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbDivider2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'breadcrumb',
    title1: 'Content',
    title2: 'Divider',
    description: 'A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text.',
    model: '    <div class="ui breadcrumb">\n' +
      '      <a class="section">Home</a>\n' +
      '      <i class="right chevron icon divider"></i>\n' +
      '      <a class="section">Registration</a>\n' +
      '      <i class="right arrow icon divider"></i>\n' +
      '      <div class="active section">Personal Information</div>\n' +
      '    </div>\n',
  },
};
</script>
