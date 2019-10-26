<template>
  <div>
    <FuiMenu inverted>
      <FuiItem a active color=red>Red</FuiItem>
      <FuiItem a color=orange>Orange</FuiItem>
      <FuiItem a color=yellow>Yellow</FuiItem>
      <FuiItem a color=olive>Olive</FuiItem>
      <FuiItem a color=green>Green</FuiItem>
      <FuiItem a color=teal>Teal</FuiItem>
    </FuiMenu>
    <FuiMenu inverted>
      <FuiItem a color=blue>Blue</FuiItem>
      <FuiItem a color=violet>Violet</FuiItem>
      <FuiItem a color=purple>Purple</FuiItem>
      <FuiItem a color=pink>Pink</FuiItem>
      <FuiItem a color=brown>Brown</FuiItem>
      <FuiItem a color=grey>Grey</FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuColored3',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Colored',
    description: 'Additional colors can be specified.',
    model: '    <div class="ui inverted menu">\n' +
      '      <a class="active red item">Red</a>\n' +
      '      <a class="orange item">Orange</a>\n' +
      '      <a class="yellow item">Yellow</a>\n' +
      '      <a class="olive item">Olive</a>\n' +
      '      <a class="green item">Green</a>\n' +
      '      <a class="teal item">Teal</a>\n' +
      '    </div>\n' +
      '    <div class="ui inverted menu">\n' +
      '      <a class="blue item">Blue</a>\n' +
      '      <a class="violet item">Violet</a>\n' +
      '      <a class="purple item">Purple</a>\n' +
      '      <a class="pink item">Pink</a>\n' +
      '      <a class="brown item">Brown</a>\n' +
      '      <a class="grey item">Grey</a>\n' +
      '    </div>\n',
  },
};
</script>
