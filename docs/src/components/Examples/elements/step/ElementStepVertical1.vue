<template>
  <div>
    <FuiSteps vertical>
      <FuiStep completed iconName=truck>
        <FuiContent>
          <FuiTitle>Shipping</FuiTitle>
          <FuiDescription>Choose your shipping options</FuiDescription>
        </FuiContent>
      </FuiStep>
      <FuiStep completed iconName="credit card">
        <FuiContent>
          <FuiTitle>Billing</FuiTitle>
          <FuiDescription>Enter billing information</FuiDescription>
        </FuiContent>
      </FuiStep>
      <FuiStep active iconName=info>
        <FuiContent>
          <FuiTitle>Confirm Order</FuiTitle>
          <FuiDescription>Verify order details</FuiDescription>
        </FuiContent>
      </FuiStep>
    </FuiSteps>
  </div>
</template>

<script>
export default {
  name: 'ElementStepVertical1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'step',
    title1: 'Groups',
    title2: 'Vertical',
    description: 'A step can be displayed stacked vertically',
    model: '    <div class="ui vertical steps">\n' +
      '      <div class="completed step">\n' +
      '        <i class="truck icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="completed step">\n' +
      '        <i class="credit card icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="active step">\n' +
      '        <i class="info icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Confirm Order</div>\n' +
      '          <div class="description">Verify order details</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
