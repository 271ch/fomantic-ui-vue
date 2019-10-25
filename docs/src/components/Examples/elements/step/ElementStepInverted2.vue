<template>
  <div>
    <FuiSegment inverted>
      <FuiSteps inverted ordered>
        <FuiStep completed>
          <FuiContent>
            <FuiTitle>Shipping</FuiTitle>
            <FuiDescription>Choose your shipping options</FuiDescription>
          </FuiContent>
        </FuiStep>
        <FuiStep completed>
          <FuiContent>
            <FuiTitle>Billing</FuiTitle>
            <FuiDescription>Enter billing information</FuiDescription>
          </FuiContent>
        </FuiStep>
        <FuiStep active>
          <FuiContent>
            <FuiTitle>Confirm Order</FuiTitle>
            <FuiDescription>Verify order details</FuiDescription>
          </FuiContent>
        </FuiStep>
      </FuiSteps>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementStepInverted2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'step',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A step\'s color can be inverted',
    model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui inverted ordered steps">\n' +
      '        <div class="completed step">\n' +
      '          <div class="content">\n' +
      '            <div class="title">Shipping</div>\n' +
      '            <div class="description">Choose your shipping options</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="completed step">\n' +
      '          <div class="content">\n' +
      '            <div class="title">Billing</div>\n' +
      '            <div class="description">Enter billing information</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="active step">\n' +
      '          <div class="content">\n' +
      '            <div class="title">Confirm Order</div>\n' +
      '            <div class="description">Verify order details</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
