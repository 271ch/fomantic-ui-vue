<template>
  <div>
    <div class="ui big steps">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepSize5',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'step',
      title1: 'Variations',
      title2: 'Size',
      description: 'Steps can have different sizes',
      model: '    <div class="ui big steps">\n' +
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
      '    </div>\n',
    };
  },
};
</script>
