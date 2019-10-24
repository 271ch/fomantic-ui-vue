<template>
  <div>
    <FuiList celled ordered>
      <FuiItem>Cats</FuiItem>
      <FuiItem>Horses</FuiItem>
      <FuiItem>Dogs
        <FuiList sub>
          <FuiItem>Labradoodles</FuiItem>
          <FuiItem>Shiba Inu</FuiItem>
          <FuiItem>Mastiff</FuiItem>
        </FuiList>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListCelled2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Variations',
    title2: 'Celled',
    description: 'A list can divide its items into cells',
    model: '    <div class="ui ordered celled list">\n' +
      '      <div class="item">Cats</div>\n' +
      '      <div class="item">Horses</div>\n' +
      '      <div class="item">Dogs\n' +
      '        <div class="list">\n' +
      '          <div class="item">Labradoodles</div>\n' +
      '          <div class="item">Shiba Inu</div>\n' +
      '          <div class="item">Mastiff</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
