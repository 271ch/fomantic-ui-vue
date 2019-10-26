<template>
  <div>
    <FuiSegment>
      <FuiDimmer active>
        <FuiLoader indeterminate text>Preparing Files</FuiLoader>
      </FuiDimmer>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderIndeterminate1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'loader',
    title1: 'States',
    title2: 'Indeterminate',
    description: 'A loader can show it\'s unsure of how long a task will take',
    model: '    <div class="ui segment">\n' +
      '      <div class="ui active dimmer">\n' +
      '        <div class="ui indeterminate text loader">Preparing Files</div>\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
