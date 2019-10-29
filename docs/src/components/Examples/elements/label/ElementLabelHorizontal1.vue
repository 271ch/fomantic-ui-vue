<template>
  <div>
    <FuiList divided selection>
      <FuiItem a>
        <FuiLabel color=red horizontal>Fruit</FuiLabel>
        Kumquats
      </FuiItem>
      <FuiItem a>
        <FuiLabel color=purple horizontal>Candy</FuiLabel>
        Ice Cream
      </FuiItem>
      <FuiItem a>
        <FuiLabel color=red horizontal>Fruit</FuiLabel>
        Orange
      </FuiItem>
      <FuiItem a>
        <FuiLabel horizontal>Dog</FuiLabel>
        Poodle
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelHorizontal1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Horizontal',
    description: 'A horizontal label is formatted to label content along-side it horizontally',
    model: '    <div class="ui selection divided list">\n' +
      '      <a class="item">\n' +
      '        <div class="ui red horizontal label">Fruit</div>\n' +
      '        Kumquats\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <div class="ui purple horizontal label">Candy</div>\n' +
      '        Ice Cream\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <div class="ui red horizontal label">Fruit</div>\n' +
      '        Orange\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <div class="ui horizontal label">Dog</div>\n' +
      '        Poodle\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
