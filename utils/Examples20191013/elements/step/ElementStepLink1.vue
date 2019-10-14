<template>
  <div>
    <div class="ui steps">
      <a class="active step">
        <i class="truck icon"/>
        <div class="content">
          <div class="title">Shipping</div>
          <div class="description">Choose your shipping options</div>
        </div>
      </a>
      <a class="step">
        <div class="content">
          <div class="title">Billing</div>
          <div class="description">Enter billing information</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepLink1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'step',
    title1: 'Content',
    title2: 'Link',
    description: 'A step can link',
    model: '    <div class="ui steps">\n' +
      '      <a class="active step">\n' +
      '        <i class="truck icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </a>\n' +
      '      <a class="step">\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
