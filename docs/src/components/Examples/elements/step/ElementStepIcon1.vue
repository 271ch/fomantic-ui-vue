<template>
  <div>
    <FuiSteps>
      <FuiStep iconName=truck>
        <FuiContent>
          <FuiTitle>Shipping</FuiTitle>
          <FuiDescription>Choose your shipping options</FuiDescription>
        </FuiContent>
      </FuiStep>
    </FuiSteps>
  </div>
</template>

<script>
export default {
  name: 'ElementStepIcon1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'step',
    title1: 'Content',
    title2: 'Icon',
    description: 'A step can contain an icon',
    model: '    <div class="ui steps">\n' +
      '      <div class="step">\n' +
      '        <i class="truck icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
