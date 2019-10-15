<template>
  <div>
    <div class="ui ignored info message">
      Fomantic uses arbitrary default values for image sizes from mini to massive. It is recommended to update these with values used in your project in <code>image.variables</code>.
    </div>
    <table class="ui definition table">
      <thead>
        <tr>
          <th>Class Name</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mini</td>
          <td>35px</td>
        </tr>
        <tr>
          <td>Tiny</td>
          <td>80px</td>
        </tr>
        <tr>
          <td>Small</td>
          <td>150px</td>
        </tr>
        <tr>
          <td>Medium</td>
          <td>300px</td>
        </tr>
        <tr>
          <td>Large</td>
          <td>450px</td>
        </tr>
        <tr>
          <td>Big</td>
          <td>600px</td>
        </tr>
        <tr>
          <td>Huge</td>
          <td>800px</td>
        </tr>
        <tr>
          <td>Massive</td>
          <td>960px</td>
        </tr>
      </tbody>
    </table>
    <img class="ui mini image" src="/images/wireframe/image.png"/>
    <div class="ui hidden divider"/>
    <img class="ui tiny image" src="/images/wireframe/image.png"/>
    <div class="ui hidden divider"/>
    <img class="ui small image" src="/images/wireframe/image.png"/>
    <div class="ui hidden divider"/>
    <img class="ui medium image" src="/images/wireframe/image.png"/>
    <div class="existing code">
      <img class="ui mini image" src="/images/wireframe/image.png"/>
      <img class="ui tiny image" src="/images/wireframe/image.png"/>
      <img class="ui small image" src="/images/wireframe/image.png"/>
      <img class="ui medium image" src="/images/wireframe/image.png"/>
      <img class="ui large image" src="/images/wireframe/image.png"/>
      <img class="ui big image" src="/images/wireframe/image.png"/>
      <img class="ui huge image" src="/images/wireframe/image.png"/>
      <img class="ui massive image" src="/images/wireframe/image.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementImageSize1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'image',
    title1: 'Variations',
    title2: 'Size',
    description: 'An image may appear at different sizes',
    model: '    <div class="ui ignored info message">\n' +
      '      Fomantic uses arbitrary default values for image sizes from mini to massive. It is recommended to update these with values used in your project in <code>image.variables</code>.\n' +
      '    </div>\n' +
      '    <table class="ui definition table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th>Class Name</th>\n' +
      '          <th>Size</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>Mini</td>\n' +
      '          <td>35px</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Tiny</td>\n' +
      '          <td>80px</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Small</td>\n' +
      '          <td>150px</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Medium</td>\n' +
      '          <td>300px</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Large</td>\n' +
      '          <td>450px</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Big</td>\n' +
      '          <td>600px</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Huge</td>\n' +
      '          <td>800px</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Massive</td>\n' +
      '          <td>960px</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <img class="ui mini image" src="/images/wireframe/image.png"/>\n' +
      '    <div class="ui hidden divider"/>\n' +
      '    <img class="ui tiny image" src="/images/wireframe/image.png"/>\n' +
      '    <div class="ui hidden divider"/>\n' +
      '    <img class="ui small image" src="/images/wireframe/image.png"/>\n' +
      '    <div class="ui hidden divider"/>\n' +
      '    <img class="ui medium image" src="/images/wireframe/image.png"/>\n' +
      '    <div class="existing code">\n' +
      '      <img class="ui mini image" src="/images/wireframe/image.png"/>\n' +
      '      <img class="ui tiny image" src="/images/wireframe/image.png"/>\n' +
      '      <img class="ui small image" src="/images/wireframe/image.png"/>\n' +
      '      <img class="ui medium image" src="/images/wireframe/image.png"/>\n' +
      '      <img class="ui large image" src="/images/wireframe/image.png"/>\n' +
      '      <img class="ui big image" src="/images/wireframe/image.png"/>\n' +
      '      <img class="ui huge image" src="/images/wireframe/image.png"/>\n' +
      '      <img class="ui massive image" src="/images/wireframe/image.png"/>\n' +
      '    </div>\n',
  },
};
</script>
