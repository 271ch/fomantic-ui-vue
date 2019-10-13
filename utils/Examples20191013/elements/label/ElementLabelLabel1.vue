<template>
  <div>
    <div class="ui label">
      <i class="mail icon"/> 23
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelLabel1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Types',
      title2: 'Label',
      description: 'A label',
      model: '    <div class="ui label">\n' +
      '      <i class="mail icon"/> 23\n' +
      '    </div>\n',
    };
  },
};
</script>
