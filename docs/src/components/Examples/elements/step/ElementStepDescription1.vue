<template>
  <div>
    <div class="ui steps">
      <div class="step">
        <div class="title">Shipping</div>
        <div class="description">Choose your shipping options</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepDescription1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'step',
      title1: 'Content',
      title2: 'Description',
      description: 'A step can contain a description',
      model: '    <div class="ui steps">\n' +
      '      <div class="step">\n' +
      '        <div class="title">Shipping</div>\n' +
      '        <div class="description">Choose your shipping options</div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
