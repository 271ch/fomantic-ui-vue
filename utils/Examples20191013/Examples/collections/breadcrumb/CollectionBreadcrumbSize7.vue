<template>
  <div>
    <div class="ui massive breadcrumb">
      <a class="section">Home</a>
      <i class="right chevron icon divider"/>
      <a class="section">Registration</a>
      <i class="right chevron icon divider"/>
      <div class="active section">Personal Information</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbSize7',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'breadcrumb',
      title1: 'Variations',
      title2: 'Size',
      description: 'A breadcrumb can vary in size',
      model: '    <div class="ui massive breadcrumb">\n' +
      '      <a class="section">Home</a>\n' +
      '      <i class="right chevron icon divider"/>\n' +
      '      <a class="section">Registration</a>\n' +
      '      <i class="right chevron icon divider"/>\n' +
      '      <div class="active section">Personal Information</div>\n' +
      '    </div>\n',
    };
  },
};
</script>
