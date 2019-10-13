<template>
  <div>
    <div class="ui label">
      Dogs
      <div class="detail">214</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelDetail1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Content',
      title2: 'Detail',
      description: 'A label can contain a detail',
      model: '    <div class="ui label">\n' +
      '      Dogs\n' +
      '      <div class="detail">214</div>\n' +
      '    </div>\n',
    };
  },
};
</script>
