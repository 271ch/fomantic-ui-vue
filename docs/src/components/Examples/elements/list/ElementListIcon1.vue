<template>
  <div>
    <FuiList>
      <FuiItem a iconName=help>
        <FuiContent header="Floated Icon">
          <FuiDescription>This text will always have a left margin to make sure it sits alongside your icon</FuiDescription>
        </FuiContent>
      </FuiItem>
      <FuiItem a iconName="right triangle">
        <FuiContent header="Icon Alignment">
          <FuiDescription>Floated icons are by default top aligned. To have an icon top aligned try this example.</FuiDescription>
        </FuiContent>
      </FuiItem>
      <FuiItem iconName=help>
        Inline Text
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListIcon1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Content',
    title2: 'Icon',
    description: 'A list item can contain an icon',
    model: '    <div class="ui list">\n' +
      '      <a class="item">\n' +
      '        <i class="help icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Floated Icon</div>\n' +
      '          <div class="description">This text will always have a left margin to make sure it sits alongside your icon</div>\n' +
      '        </div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="right triangle icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Icon Alignment</div>\n' +
      '          <div class="description">Floated icons are by default top aligned. To have an icon top aligned try this example.</div>\n' +
      '        </div>\n' +
      '      </a>\n' +
      '      <div class="item">\n' +
      '        <i class="help icon"></i>\n' +
      '        Inline Text\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
