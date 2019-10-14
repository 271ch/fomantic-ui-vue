<template>
  <div>
    <div class="ui steps">
      <div class="step">
        <i class="truck icon"/>
        <div class="content">
          <div class="title">Shipping</div>
          <div class="description">Choose your shipping options</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepIcon1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'step',
    title1: 'Content',
    title2: 'Icon',
    description: 'A step can contain an icon',
    model: '    <div class="ui steps">\n' +
      '      <div class="step">\n' +
      '        <i class="truck icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="title">Shipping</div>\n' +
      '          <div class="description">Choose your shipping options</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
