<template>
  <div>
    <div class="ui form">
      <div class="field">
        <label>Description</label>
        <textarea class="transparent" placeholder="Transparent textarea" cols="30" rows="3"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormTransparentTextarea1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Field Variations',
      title2: 'Transparent Textarea',
      description: 'A textarea can appear transparent',
      model: '    <div class="ui form">\n' +
      '      <div class="field">\n' +
      '        <label>Description</label>\n' +
      '        <textarea class="transparent" placeholder="Transparent textarea" cols="30" rows="3"/>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
