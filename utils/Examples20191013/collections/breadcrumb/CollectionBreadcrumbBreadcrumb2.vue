<template>
  <div>
    <div class="ui breadcrumb">
      <a class="section">Home</a>
      <i class="right angle icon divider"/>
      <a class="section">Store</a>
      <i class="right angle icon divider"/>
      <div class="active section">T-Shirt</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbBreadcrumb2',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'breadcrumb',
      title1: 'Types',
      title2: 'Breadcrumb',
      description: 'A standard breadcrumb',
      model: '    <div class="ui breadcrumb">\n' +
      '      <a class="section">Home</a>\n' +
      '      <i class="right angle icon divider"/>\n' +
      '      <a class="section">Store</a>\n' +
      '      <i class="right angle icon divider"/>\n' +
      '      <div class="active section">T-Shirt</div>\n' +
      '    </div>\n',
    };
  },
};
</script>
