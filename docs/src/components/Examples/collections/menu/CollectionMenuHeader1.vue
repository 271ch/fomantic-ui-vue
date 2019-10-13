<template>
  <div>
    <div class="ui menu">
      <div class="header item">
        Our Company
      </div>
      <a class="item">
        About Us
      </a>
      <a class="item">
        Jobs
      </a>
      <a class="item">
        Locations
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuHeader1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'menu',
      title1: 'Content',
      title2: 'Header',
      description: 'A menu item may include a header or may itself be a header',
      model: '    <div class="ui menu">\n' +
      '      <div class="header item">\n' +
      '        Our Company\n' +
      '      </div>\n' +
      '      <a class="item">\n' +
      '        About Us\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Jobs\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Locations\n' +
      '      </a>\n' +
      '    </div>\n',
    };
  },
};
</script>
