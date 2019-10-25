<template>
  <div>
    <FuiSteps>
      <FuiStep completed iconName=payment>
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
  name: 'ElementStepCompleted1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'step',
    title1: 'States',
    title2: 'Completed',
    description: 'A step can show that a user has completed it',
    model: '    <div class="ui steps">\n' +
      '      <div class="completed step">\n' +
      '        <i class="payment icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
