<template>
  <div>
    <FuiSteps>
      <FuiStep tag=a active iconName=truck>
        <FuiContent>
          <FuiTitle>Shipping</FuiTitle>
          <FuiDescription>Choose your shipping options</FuiDescription>
        </FuiContent>
      </FuiStep>
      <FuiStep tag=a>
        <FuiContent>
          <FuiTitle>Billing</FuiTitle>
          <FuiDescription>Enter billing information</FuiDescription>
        </FuiContent>
      </FuiStep>
    </FuiSteps>
  </div>
</template>

<script>
export default {
  name: 'ElementStepLink1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'step',
    title1: 'Content',
    title2: 'Link',
    description: 'A step can link',
    model: '    <div class="ui steps">\n' +
      '      <a class="active step">\n' +
      '        <i class="truck icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </a>\n' +
      '      <a class="step">\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
