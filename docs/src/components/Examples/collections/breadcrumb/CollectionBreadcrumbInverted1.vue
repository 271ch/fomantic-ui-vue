<template>
  <div>
    <FuiSegment inverted>
        <FuiBreadcrumb inverted>
            <FuiBCSection>Home</FuiBCSection>
            <FuiBCDivider iconName="right chevron"></FuiBCDivider>
            <FuiBCSection>Registration</FuiBCSection>
            <FuiBCDivider iconName="right chevron"></FuiBCDivider>
            <FuiBCSection tag=div active>Personal Information</FuiBCSection>
        </FuiBreadcrumb>
        <p></p>
        <FuiBreadcrumb inverted>
            <FuiBCSection tag=div>Home</FuiBCSection>
            <FuiBCDivider iconName="right chevron"></FuiBCDivider>
            <FuiBCSection tag=div>Registration</FuiBCSection>
            <FuiBCDivider iconName="right chevron"></FuiBCDivider>
            <FuiBCSection tag=div active>Personal Information</FuiBCSection>
        </FuiBreadcrumb>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbInverted1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'breadcrumb',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A breadcrumb can be inverted',
    model: '    <div class="ui inverted segment">\n' +
      '        <div class="ui inverted breadcrumb">\n' +
      '            <a class="section">Home</a>\n' +
      '            <i class="right chevron icon divider"></i>\n' +
      '            <a class="section">Registration</a>\n' +
      '            <i class="right chevron icon divider"></i>\n' +
      '            <div class="active section">Personal Information</div>\n' +
      '        </div>\n' +
      '        <p></p>\n' +
      '        <div class="ui inverted breadcrumb">\n' +
      '            <div class="section">Home</div>\n' +
      '            <i class="right chevron icon divider"></i>\n' +
      '            <div class="section">Registration</div>\n' +
      '            <i class="right chevron icon divider"></i>\n' +
      '            <div class="active section">Personal Information</div>\n' +
      '        </div>\n' +
      '    </div>\n',
  },
};
</script>
