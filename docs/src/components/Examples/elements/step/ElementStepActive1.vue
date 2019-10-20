<template>
  <div>
    <div class="ui steps">
      <div class="active step">
        <i class="payment icon"></i>
        <div class="content">
          <div class="title">Billing</div>
          <div class="description">Enter billing information</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepActive1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'step',
    title1: 'States',
    title2: 'Active',
    description: 'A step can be highlighted as active',
    model: '    <div class="ui steps">\n' +
      '      <div class="active step">\n' +
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
