<template>
  <div>
    <FuiPlaceholder style="width:150px; height:150px;">
      <FuiPHImage></FuiPHImage>
    </FuiPlaceholder>
  </div>
</template>

<script>
export default {
  name: 'ElementPlaceholderImage1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'placeholder',
    title1: 'Content',
    title2: 'Image',
    description: 'A placeholder can contain an image',
    model: '    <div class="ui placeholder" style="width: 150px; height: 150px;">\n' +
      '      <div class="image"></div>\n' +
      '    </div>\n',
  },
};
</script>
