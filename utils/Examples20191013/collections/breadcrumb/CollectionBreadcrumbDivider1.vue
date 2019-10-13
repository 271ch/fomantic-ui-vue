<template>
  <div>
    <div class="ui breadcrumb">
      <a class="section">Home</a>
      <span class="divider">/</span>
      <a class="section">Registration</a>
      <span class="divider">/</span>
      <div class="active section">Personal Information</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbDivider1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'breadcrumb',
      title1: 'Content',
      title2: 'Divider',
      description: 'A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text.',
      model: '    <div class="ui breadcrumb">\n' +
      '      <a class="section">Home</a>\n' +
      '      <span class="divider">/</span>\n' +
      '      <a class="section">Registration</a>\n' +
      '      <span class="divider">/</span>\n' +
      '      <div class="active section">Personal Information</div>\n' +
      '    </div>\n',
    };
  },
};
</script>
