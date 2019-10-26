<template>
  <div>
    <FuiSegment inverted>
      <FuiLoader active inverted></FuiLoader>
      <br>
      <br>
      <br>
      <br>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderInverted1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'loader',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'Loaders can have their colors inverted.',
    model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui active inverted loader"></div>\n' +
      '      <br>\n' +
      '      <br>\n' +
      '      <br>\n' +
      '      <br>\n' +
      '    </div>\n',
  },
};
</script>
