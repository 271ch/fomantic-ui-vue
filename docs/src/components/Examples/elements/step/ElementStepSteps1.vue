<template>
  <div>
    <div class="ui ignored positive icon message">
      <i class="mobile icon"/>
      <div class="content">
        <h3 class="header">Responsive Element</h3>
        <p>Steps will automatically stack on mobile. To make steps automatically stack for tablet use the <code>tablet stackable</code> variation.</p>
      </div>
    </div>
    <div class="ui steps">
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
</template>

<script>
export default {
  name: 'ElementStepSteps1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'step',
    title1: 'Groups',
    title2: 'Steps',
    description: 'A set of steps',
    model: '    <div class="ui ignored positive icon message">\n' +
      '      <i class="mobile icon"/>\n' +
      '      <div class="content">\n' +
      '        <h3 class="header">Responsive Element</h3>\n' +
      '        <p>Steps will automatically stack on mobile. To make steps automatically stack for tablet use the <code>tablet stackable</code> variation.</p>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui steps">\n' +
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
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
