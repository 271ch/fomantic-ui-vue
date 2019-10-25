<template>
  <div>
    <FuiSteps>
      <FuiStep>
        <FuiTitle>Shipping</FuiTitle>
        <FuiDescription>Choose your shipping options</FuiDescription>
      </FuiStep>
    </FuiSteps>
  </div>
</template>

<script>
export default {
  name: 'ElementStepDescription1',
  info: {
    converted: true,
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
  },
};
</script>
