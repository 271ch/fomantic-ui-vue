<template>
  <div>
    <FuiMenu vertical>
      <FuiItem header="Products">
        <FuiMenu sub>
          <FuiItem a>Enterprise</FuiItem>
          <FuiItem a>Consumer</FuiItem>
        </FuiMenu>
      </FuiItem>
      <FuiItem header="CMS Solutions">
        <FuiMenu sub>
          <FuiItem a>Rails</FuiItem>
          <FuiItem a>Python</FuiItem>
          <FuiItem a>PHP</FuiItem>
        </FuiMenu>
      </FuiItem>
      <FuiItem header="Hosting">
        <FuiMenu sub>
          <FuiItem a>Shared</FuiItem>
          <FuiItem a>Dedicated</FuiItem>
        </FuiMenu>
      </FuiItem>
      <FuiItem header="Support">
        <FuiMenu sub>
          <FuiItem a>E-mail Support</FuiItem>
          <FuiItem a>FAQs</FuiItem>
        </FuiMenu>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuHeader2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Header',
    description: 'A menu item may include a header or may itself be a header',
    model: '    <div class="ui vertical menu">\n' +
      '      <div class="item">\n' +
      '        <div class="header">Products</div>\n' +
      '        <div class="menu">\n' +
      '          <a class="item">Enterprise</a>\n' +
      '          <a class="item">Consumer</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="header">CMS Solutions</div>\n' +
      '        <div class="menu">\n' +
      '          <a class="item">Rails</a>\n' +
      '          <a class="item">Python</a>\n' +
      '          <a class="item">PHP</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="header">Hosting</div>\n' +
      '        <div class="menu">\n' +
      '          <a class="item">Shared</a>\n' +
      '          <a class="item">Dedicated</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="header">Support</div>\n' +
      '        <div class="menu">\n' +
      '          <a class="item">E-mail Support</a>\n' +
      '          <a class="item">FAQs</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
