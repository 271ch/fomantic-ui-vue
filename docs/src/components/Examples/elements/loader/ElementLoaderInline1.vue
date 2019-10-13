<template>
  <div>
    <div class="ui active inline loader"/>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderInline1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'loader',
      title1: 'Variations',
      title2: 'Inline',
      description: 'Loaders can appear inline with content',
      model: '    <div class="ui active inline loader"/>\n',
    };
  },
};
</script>
