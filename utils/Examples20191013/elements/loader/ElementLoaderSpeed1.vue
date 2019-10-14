<template>
  <div>
    <div class="ui active inline slow loader"/>
    <div class="ui active inline loader"/>
    <div class="ui active inline fast loader"/>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderSpeed1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'loader',
    title1: 'Variations',
    title2: 'Speed',
    description: 'Loaders can appear slow, normal or fast',
    model: '    <div class="ui active inline slow loader"/>\n' +
      '    <div class="ui active inline loader"/>\n' +
      '    <div class="ui active inline fast loader"/>\n',
  },
};
</script>
