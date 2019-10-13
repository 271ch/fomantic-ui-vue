<template>
  <div>
    <div class="ui breadcrumb">
      <a class="section">Home</a>
      <div class="divider"> / </div>
      <div class="active section">Search for: <a href="#">paper towels</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbLink1',
  data: function () {
    return {
      converted: false,
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
    };
  },
};
</script>
