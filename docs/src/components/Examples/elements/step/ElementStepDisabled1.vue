<template>
  <div>
    <FuiSteps>
      <FuiStep disabled>
        Billing
      </FuiStep>
    </FuiSteps>
  </div>
</template>

<script>
export default {
  name: 'ElementStepDisabled1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'step',
    title1: 'States',
    title2: 'Disabled',
    description: 'A step can show that it cannot be selected',
    model: '    <div class="ui steps">\n' +
      '      <div class="disabled step">\n' +
      '        Billing\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
