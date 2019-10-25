<template>
  <div>
    <FuiSteps n=two>
      <FuiStep active iconName=payment>
        <FuiContent>
          <FuiTitle>Billing</FuiTitle>
        </FuiContent>
      </FuiStep>
      <FuiStep disabled iconName=info>
        <FuiContent>
          <FuiTitle>Confirm Order</FuiTitle>
        </FuiContent>
      </FuiStep>
    </FuiSteps>
  </div>
</template>

<script>
export default {
  name: 'ElementStepEvenlyDivided2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'step',
    title1: 'Variations',
    title2: 'Evenly Divided',
    description: 'Steps can be divided evenly inside their parent',
    model: '    <div class="ui two steps">\n' +
      '      <div class="active step">\n' +
      '        <i class="payment icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="disabled step">\n' +
      '        <i class="info icon"></i>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Confirm Order</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
