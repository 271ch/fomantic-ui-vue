<template>
  <div>
    <div class="ui disabled header">
      Disabled Header
    </div>
    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderDisabled1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'header',
      title1: 'States',
      title2: 'Disabled',
      description: 'A header can show that it is inactive',
      model: '    <div class="ui disabled header">\n' +
      '      Disabled Header\n' +
      '    </div>\n' +
      '    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n',
    };
  },
};
</script>
