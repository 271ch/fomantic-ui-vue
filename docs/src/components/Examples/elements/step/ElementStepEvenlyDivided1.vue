<template>
  <div>
    <div class="ui three steps">
      <div class="step">
        <i class="truck icon"/>
        <div class="content">
          <div class="title">Shipping</div>
        </div>
      </div>
      <div class="active step">
        <i class="payment icon"/>
        <div class="content">
          <div class="title">Billing</div>
        </div>
      </div>
      <div class="disabled step">
        <i class="info icon"/>
        <div class="content">
          <div class="title">Confirm Order</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepEvenlyDivided1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'step',
    title1: 'Variations',
    title2: 'Evenly Divided',
    description: 'Steps can be divided evenly inside their parent',
    model: '    <div class="ui three steps">\n' +
      '      <div class="step">\n' +
      '        <i class="truck icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="active step">\n' +
      '        <i class="payment icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="disabled step">\n' +
      '        <i class="info icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Confirm Order</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
