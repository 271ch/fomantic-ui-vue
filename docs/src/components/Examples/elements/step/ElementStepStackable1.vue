<template>
  <div>
    <FuiSteps tablet stackable>
      <FuiStep iconName=plane>
        <FuiContent>
          <FuiTitle>Shipping</FuiTitle>
          <FuiDescription>Choose your shipping options</FuiDescription>
        </FuiContent>
      </FuiStep>
      <FuiStep active iconName=dollar>
        <FuiContent>
          <FuiTitle>Billing</FuiTitle>
          <FuiDescription>Enter billing information</FuiDescription>
        </FuiContent>
      </FuiStep>
      <FuiStep disabled iconName="info circle">
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
  name: 'ElementStepStackable1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'step',
    title1: 'Variations',
    title2: 'Stackable',
    description: 'A step can stack vertically only on smaller screens',
    model: '    <div class="ui tablet stackable steps">\n' +
      '      <div class="step">\n' +
      '        <i class="plane icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="active step">\n' +
      '        <i class="dollar icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="disabled step">\n' +
      '        <i class="info circle icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Confirm Order</div>\n' +
      '          <div class="description">Verify order details</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
