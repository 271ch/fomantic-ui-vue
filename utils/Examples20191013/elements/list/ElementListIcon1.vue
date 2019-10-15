<template>
  <div>
    <div class="ui list">
      <a class="item">
        <i class="help icon"/>
        <div class="content">
          <div class="header">Floated Icon</div>
          <div class="description">This text will always have a left margin to make sure it sits alongside your icon</div>
        </div>
      </a>
      <a class="item">
        <i class="right triangle icon"/>
        <div class="content">
          <div class="header">Icon Alignment</div>
          <div class="description">Floated icons are by default top aligned. To have an icon top aligned try this example.</div>
        </div>
      </a>
      <div class="item">
        <i class="help icon"/>
        Inline Text
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListIcon1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'list',
    title1: 'Content',
    title2: 'Icon',
    description: 'A list item can contain an icon',
    model: '    <div class="ui list">\n' +
      '      <a class="item">\n' +
      '        <i class="help icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Floated Icon</div>\n' +
      '          <div class="description">This text will always have a left margin to make sure it sits alongside your icon</div>\n' +
      '        </div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="right triangle icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Icon Alignment</div>\n' +
      '          <div class="description">Floated icons are by default top aligned. To have an icon top aligned try this example.</div>\n' +
      '        </div>\n' +
      '      </a>\n' +
      '      <div class="item">\n' +
      '        <i class="help icon"/>\n' +
      '        Inline Text\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
