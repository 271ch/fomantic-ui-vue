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
    <img src="/images/wireframe/image.png" class="ui mini image">
    <div class="ui hidden divider"/>
    <img src="/images/wireframe/image.png" class="ui tiny image">
    <div class="ui hidden divider"/>
    <img src="/images/wireframe/image.png" class="ui small image">
    <div class="ui hidden divider"/>
    <img src="/images/wireframe/image.png" class="ui medium image">
    <div class="existing code">
      <img src="/images/wireframe/image.png" class="ui mini image">
      <img src="/images/wireframe/image.png" class="ui tiny image">
      <img src="/images/wireframe/image.png" class="ui small image">
      <img src="/images/wireframe/image.png" class="ui medium image">
      <img src="/images/wireframe/image.png" class="ui large image">
      <img src="/images/wireframe/image.png" class="ui big image">
      <img src="/images/wireframe/image.png" class="ui huge image">
      <img src="/images/wireframe/image.png" class="ui massive image">
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
      '    <img src="/images/wireframe/image.png" class="ui mini image">\n' +
      '    <div class="ui hidden divider"/>\n' +
      '    <img src="/images/wireframe/image.png" class="ui tiny image">\n' +
      '    <div class="ui hidden divider"/>\n' +
      '    <img src="/images/wireframe/image.png" class="ui small image">\n' +
      '    <div class="ui hidden divider"/>\n' +
      '    <img src="/images/wireframe/image.png" class="ui medium image">\n' +
      '    <div class="existing code">\n' +
      '      <img src="/images/wireframe/image.png" class="ui mini image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui tiny image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui small image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui medium image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui large image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui big image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui huge image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui massive image">\n' +
      '    </div>\n',
  },
};
</script>
