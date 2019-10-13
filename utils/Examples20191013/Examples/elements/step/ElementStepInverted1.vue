<template>
  <div>
    <div class="ui inverted segment">
      <div class="ui inverted steps">
        <div class="step">
          <i class="truck icon"/>
          <div class="content">
            <div class="title">Shipping</div>
            <div class="description">Choose your shipping options</div>
          </div>
        </div>
        <div class="active step">
          <i class="payment icon"/>
          <div class="content">
            <div class="title">Billing</div>
            <div class="description">Enter billing information</div>
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
  </div>
</template>

<script>
export default {
  name: 'ElementStepInverted1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'step',
      title1: 'Variations',
      title2: 'Inverted',
      description: 'A step\'s color can be inverted',
      model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui inverted steps">\n' +
      '        <div class="step">\n' +
      '          <i class="truck icon"/>\n' +
      '          <div class="content">\n' +
      '            <div class="title">Shipping</div>\n' +
      '            <div class="description">Choose your shipping options</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="active step">\n' +
      '          <i class="payment icon"/>\n' +
      '          <div class="content">\n' +
      '            <div class="title">Billing</div>\n' +
      '            <div class="description">Enter billing information</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="disabled step">\n' +
      '          <i class="info icon"/>\n' +
      '          <div class="content">\n' +
      '            <div class="title">Confirm Order</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
