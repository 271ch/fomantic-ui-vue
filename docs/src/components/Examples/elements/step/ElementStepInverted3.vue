<template>
  <div>
    <div class="ui inverted segment">
      <div class="ui inverted vertical steps">
        <div class="completed step">
          <i class="truck icon"></i>
          <div class="content">
            <div class="title">Shipping</div>
            <div class="description">Choose your shipping options</div>
          </div>
        </div>
        <div class="completed step">
          <i class="credit card icon"></i>
          <div class="content">
            <div class="title">Billing</div>
            <div class="description">Enter billing information</div>
          </div>
        </div>
        <div class="active step">
          <i class="info icon"></i>
          <div class="content">
            <div class="title">Confirm Order</div>
            <div class="description">Verify order details</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepInverted3',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'step',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A step\'s color can be inverted',
    model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui inverted vertical steps">\n' +
      '        <div class="completed step">\n' +
      '          <i class="truck icon"></i>\n' +
      '          <div class="content">\n' +
      '            <div class="title">Shipping</div>\n' +
      '            <div class="description">Choose your shipping options</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="completed step">\n' +
      '          <i class="credit card icon"></i>\n' +
      '          <div class="content">\n' +
      '            <div class="title">Billing</div>\n' +
      '            <div class="description">Enter billing information</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="active step">\n' +
      '          <i class="info icon"></i>\n' +
      '          <div class="content">\n' +
      '            <div class="title">Confirm Order</div>\n' +
      '            <div class="description">Verify order details</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
