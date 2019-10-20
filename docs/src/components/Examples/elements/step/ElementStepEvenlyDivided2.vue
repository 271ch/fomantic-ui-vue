<template>
  <div>
    <div class="ui two steps">
      <div class="active step">
        <i class="payment icon"></i>
        <div class="content">
          <div class="title">Billing</div>
        </div>
      </div>
      <div class="disabled step">
        <i class="info icon"></i>
        <div class="content">
          <div class="title">Confirm Order</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepEvenlyDivided2',
  info: {
    converted: false,
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
