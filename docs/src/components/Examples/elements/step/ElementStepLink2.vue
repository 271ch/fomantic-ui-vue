<template>
  <div>
    <div class="ui steps">
      <div class="link step">
        <i class="truck icon"/>
        <div class="content">
          <div class="title">Shipping</div>
          <div class="description">Choose your shipping options</div>
        </div>
      </div>
      <div class="link step">
        <div class="content">
          <div class="title">Billing</div>
          <div class="description">Enter billing information</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepLink2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'step',
      title1: 'Content',
      title2: 'Link',
      description: 'A step can link',
      model: '    <div class="ui steps">\n' +
      '      <div class="link step">\n' +
      '        <i class="truck icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="link step">\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
