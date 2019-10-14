<template>
  <div>
    <div class="ui breadcrumb">
      <a class="section">Home</a>
      <i class="right chevron icon divider"/>
      <a class="section">Registration</a>
      <i class="right arrow icon divider"/>
      <div class="active section">Personal Information</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbDivider2',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'breadcrumb',
    title1: 'Content',
    title2: 'Divider',
    description: 'A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text.',
    model: '    <div class="ui breadcrumb">\n' +
      '      <a class="section">Home</a>\n' +
      '      <i class="right chevron icon divider"/>\n' +
      '      <a class="section">Registration</a>\n' +
      '      <i class="right arrow icon divider"/>\n' +
      '      <div class="active section">Personal Information</div>\n' +
      '    </div>\n',
  },
};
</script>
