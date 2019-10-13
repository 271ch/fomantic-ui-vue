<template>
  <div>
    <div class="ui inverted segment">
      <div class="ui active inverted loader"/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderInverted1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'loader',
      title1: 'Variations',
      title2: 'Inverted',
      description: 'Loaders can have their colors inverted.',
      model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui active inverted loader"/>\n' +
      '      <br/>\n' +
      '      <br/>\n' +
      '      <br/>\n' +
      '      <br/>\n' +
      '    </div>\n',
    };
  },
};
</script>
