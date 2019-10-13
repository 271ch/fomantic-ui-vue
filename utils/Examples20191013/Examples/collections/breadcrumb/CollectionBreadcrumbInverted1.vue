<template>
  <div>
    <div class="ui inverted segment">
        <div class="ui inverted breadcrumb">
            <a class="section">Home</a>
            <i class="right chevron icon divider"/>
            <a class="section">Registration</a>
            <i class="right chevron icon divider"/>
            <div class="active section">Personal Information</div>
        </div>
        <p/>
        <div class="ui inverted breadcrumb">
            <div class="section">Home</div>
            <i class="right chevron icon divider"/>
            <div class="section">Registration</div>
            <i class="right chevron icon divider"/>
            <div class="active section">Personal Information</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionBreadcrumbInverted1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'breadcrumb',
      title1: 'Variations',
      title2: 'Inverted',
      description: 'A breadcrumb can be inverted',
      model: '    <div class="ui inverted segment">\n' +
      '        <div class="ui inverted breadcrumb">\n' +
      '            <a class="section">Home</a>\n' +
      '            <i class="right chevron icon divider"/>\n' +
      '            <a class="section">Registration</a>\n' +
      '            <i class="right chevron icon divider"/>\n' +
      '            <div class="active section">Personal Information</div>\n' +
      '        </div>\n' +
      '        <p/>\n' +
      '        <div class="ui inverted breadcrumb">\n' +
      '            <div class="section">Home</div>\n' +
      '            <i class="right chevron icon divider"/>\n' +
      '            <div class="section">Registration</div>\n' +
      '            <i class="right chevron icon divider"/>\n' +
      '            <div class="active section">Personal Information</div>\n' +
      '        </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
