<template>
  <div>
    <FuiMenu>
      <FuiItem isHeader>
        Our Company
      </FuiItem>
      <FuiItem a>
        About Us
      </FuiItem>
      <FuiItem a>
        Jobs
      </FuiItem>
      <FuiItem a>
        Locations
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuHeader1',
  info: {
    converted: true,
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
  },
};
</script>
