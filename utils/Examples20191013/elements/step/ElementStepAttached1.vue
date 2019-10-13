<template>
  <div>
    <div class="ui three top attached steps">
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
          <div class="description">Verify order details</div>
        </div>
      </div>
    </div>
    <div class="ui attached segment">
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
    </div>
    <div class="ui three bottom attached steps">
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
          <div class="description">Verify order details</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepAttached1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'step',
      title1: 'Variations',
      title2: 'Attached',
      description: 'Steps can be attached to other elements',
      model: '    <div class="ui three top attached steps">\n' +
      '      <div class="step">\n' +
      '        <i class="truck icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="active step">\n' +
      '        <i class="payment icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="disabled step">\n' +
      '        <i class="info icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Confirm Order</div>\n' +
      '          <div class="description">Verify order details</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui attached segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '    </div>\n' +
      '    <div class="ui three bottom attached steps">\n' +
      '      <div class="step">\n' +
      '        <i class="truck icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="active step">\n' +
      '        <i class="payment icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="disabled step">\n' +
      '        <i class="info icon"/>\n' +
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
