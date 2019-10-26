<template>
  <div>
    <FuiLoader active inline slow></FuiLoader>
    <FuiLoader active inline></FuiLoader>
    <FuiLoader active inline fast></FuiLoader>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderSpeed1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'loader',
    title1: 'Variations',
    title2: 'Speed',
    description: 'Loaders can appear slow, normal or fast',
    model: '    <div class="ui active inline slow loader"></div>\n' +
      '    <div class="ui active inline loader"></div>\n' +
      '    <div class="ui active inline fast loader"></div>\n',
  },
};
</script>
