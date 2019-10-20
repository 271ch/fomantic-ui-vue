<template>
  <div>
    <div class="ignored ui info message">Icons can be placed to the right inside a label.</div>
    <div class="ui right icon label">
      Mail
      <i class="mail icon"></i>
    </div>
    <div class="ui right icon label">
      Test Passed
      <i class="checkmark icon"></i>
    </div>
    <div class="ui right icon label">
      Dog
      <i class="dog icon"></i>
    </div>
    <div class="ui right icon label">
      Cat
      <i class="cat icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelIcon2',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'label',
    title1: 'Content',
    title2: 'Icon',
    description: 'A label can include an icon',
    model: '    <div class="ignored ui info message">Icons can be placed to the right inside a label.</div>\n' +
      '    <div class="ui right icon label">\n' +
      '      Mail\n' +
      '      <i class="mail icon"></i>\n' +
      '    </div>\n' +
      '    <div class="ui right icon label">\n' +
      '      Test Passed\n' +
      '      <i class="checkmark icon"></i>\n' +
      '    </div>\n' +
      '    <div class="ui right icon label">\n' +
      '      Dog\n' +
      '      <i class="dog icon"></i>\n' +
      '    </div>\n' +
      '    <div class="ui right icon label">\n' +
      '      Cat\n' +
      '      <i class="cat icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
