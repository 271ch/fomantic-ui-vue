<template>
  <div>
    <FuiSegment>
        <FuiLoader active slow color=green double></FuiLoader>
        <br>
        <br>
        <br>
        <br>
    </FuiSegment>
    <FuiSegment>
        <FuiLoader active color=blue elastic></FuiLoader>
        <br>
        <br>
        <br>
        <br>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderStyles1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'loader',
    title1: 'Variations',
    title2: 'Styles',
    description: 'Loaders can also appear in',
    model: '    <div class="ui segment">\n' +
      '        <div class="ui active green slow double loader"></div>\n' +
      '        <br>\n' +
      '        <br>\n' +
      '        <br>\n' +
      '        <br>\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '        <div class="ui active blue elastic loader"></div>\n' +
      '        <br>\n' +
      '        <br>\n' +
      '        <br>\n' +
      '        <br>\n' +
      '    </div>\n',
  },
};
</script>
