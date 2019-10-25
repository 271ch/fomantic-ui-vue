<template>
  <div>
    <FuiSteps n=three attached=top>
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
          <FuiDescription>Verify order details</FuiDescription>
        </FuiContent>
      </FuiStep>
    </FuiSteps>
    <FuiSegment attached>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
    <FuiSteps n=three attached=bottom>
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
          <FuiDescription>Verify order details</FuiDescription>
        </FuiContent>
      </FuiStep>
    </FuiSteps>
  </div>
</template>

<script>
export default {
  name: 'ElementStepAttached1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'step',
    title1: 'Variations',
    title2: 'Attached',
    description: 'Steps can be attached to other elements',
    model: '    <div class="ui three top attached steps">\n' +
      '      <div class="step">\n' +
      '        <i class="truck icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="active step">\n' +
      '        <i class="payment icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="disabled step">\n' +
      '        <i class="info icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Confirm Order</div>\n' +
      '          <div class="description">Verify order details</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui attached segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <div class="ui three bottom attached steps">\n' +
      '      <div class="step">\n' +
      '        <i class="truck icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="active step">\n' +
      '        <i class="payment icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="disabled step">\n' +
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
