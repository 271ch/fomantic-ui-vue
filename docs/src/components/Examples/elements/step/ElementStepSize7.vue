<template>
  <div>
    <FuiSteps size=massive>
      <FuiStep iconName=truck>
        <FuiContent>
          <FuiTitle>Shipping</FuiTitle>
        </FuiContent>
      </FuiStep>
      <FuiStep active iconName=payment>
        <FuiContent>
          <FuiTitle>Billing</FuiTitle>
        </FuiContent>
      </FuiStep>
    </FuiSteps>
  </div>
</template>

<script>
export default {
  name: 'ElementStepSize7',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'step',
    title1: 'Variations',
    title2: 'Size',
    description: 'Steps can have different sizes',
    model: '    <div class="ui massive steps">\n' +
      '      <div class="step">\n' +
      '        <i class="truck icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="active step">\n' +
      '        <i class="payment icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
