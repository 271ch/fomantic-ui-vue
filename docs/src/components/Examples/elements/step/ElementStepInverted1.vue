<template>
  <div>
    <FuiSegment inverted>
      <FuiSteps inverted>
        <FuiStep iconName=truck>
          <FuiContent>
            <FuiTitle>Shipping</FuiTitle>
            <FuiDescription>Choose your shipping options</FuiDescription>
          </FuiContent>
        </FuiStep>
        <FuiStep active iconName=payment>
          <FuiContent>
            <FuiTitle>Billing</FuiTitle>
            <FuiDescription>Enter billing information</FuiDescription>
          </FuiContent>
        </FuiStep>
        <FuiStep disabled iconName=info>
          <FuiContent>
            <FuiTitle>Confirm Order</FuiTitle>
          </FuiContent>
        </FuiStep>
      </FuiSteps>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementStepInverted1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'step',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A step\'s color can be inverted',
    model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui inverted steps">\n' +
      '        <div class="step">\n' +
      '          <i class="truck icon"></i>\n' +
      '          <div class="content">\n' +
      '            <div class="title">Shipping</div>\n' +
      '            <div class="description">Choose your shipping options</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="active step">\n' +
      '          <i class="payment icon"></i>\n' +
      '          <div class="content">\n' +
      '            <div class="title">Billing</div>\n' +
      '            <div class="description">Enter billing information</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="disabled step">\n' +
      '          <i class="info icon"></i>\n' +
      '          <div class="content">\n' +
      '            <div class="title">Confirm Order</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
