<template>
  <div>
    <div class="ui unstackable steps">
      <div class="step">
        <i class="plane icon"/>
        <div class="content">
          <div class="title">Shipping</div>
          <div class="description">Choose your shipping options</div>
        </div>
      </div>
      <div class="active step">
        <i class="dollar icon"/>
        <div class="content">
          <div class="title">Billing</div>
          <div class="description">Enter billing information</div>
        </div>
      </div>
      <div class="disabled step">
        <i class="info circle icon"/>
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
  name: 'ElementStepUnstackable1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'step',
    title1: 'Variations',
    title2: 'Unstackable',
    description: 'A step can prevent itself from stacking on mobile',
    model: '    <div class="ui unstackable steps">\n' +
      '      <div class="step">\n' +
      '        <i class="plane icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="active step">\n' +
      '        <i class="dollar icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="disabled step">\n' +
      '        <i class="info circle icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Confirm Order</div>\n' +
      '          <div class="description">Verify order details</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
