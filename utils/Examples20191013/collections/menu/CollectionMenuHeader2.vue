<template>
  <div>
    <div class="ui vertical menu">
      <div class="item">
        <div class="header">Products</div>
        <div class="menu">
          <a class="item">Enterprise</a>
          <a class="item">Consumer</a>
        </div>
      </div>
      <div class="item">
        <div class="header">CMS Solutions</div>
        <div class="menu">
          <a class="item">Rails</a>
          <a class="item">Python</a>
          <a class="item">PHP</a>
        </div>
      </div>
      <div class="item">
        <div class="header">Hosting</div>
        <div class="menu">
          <a class="item">Shared</a>
          <a class="item">Dedicated</a>
        </div>
      </div>
      <div class="item">
        <div class="header">Support</div>
        <div class="menu">
          <a class="item">E-mail Support</a>
          <a class="item">FAQs</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuHeader2',
  data: function () {
    return {
      converted: false,
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
    };
  },
};
</script>
