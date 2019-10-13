<template>
  <div>
    <div class="ui ordered steps">
      <div class="completed step">
        <div class="content">
          <div class="title">Shipping</div>
          <div class="description">Choose your shipping options</div>
        </div>
      </div>
      <div class="completed step">
        <div class="content">
          <div class="title">Billing</div>
          <div class="description">Enter billing information</div>
        </div>
      </div>
      <div class="active step">
        <div class="content">
          <div class="title">Confirm Order</div>
          <div class="description">Verify order details</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepOrdered1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'step',
      title1: 'Groups',
      title2: 'Ordered',
      description: 'A step can show a ordered sequence of steps',
      model: '    <div class="ui ordered steps">\n' +
      '      <div class="completed step">\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="completed step">\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="active step">\n' +
      '        <div class="content">\n' +
      '          <div class="title">Confirm Order</div>\n' +
      '          <div class="description">Verify order details</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
