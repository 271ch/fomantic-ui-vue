<template>
  <div>
    <div class="ui active centered inline loader"/>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderInlineCenter1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'loader',
      title1: 'Variations',
      title2: 'Inline Center',
      description: 'Loaders can appear inline centered with content',
      model: '    <div class="ui active centered inline loader"/>\n',
    };
  },
};
</script>
