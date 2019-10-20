<template>
  <div>
    <div class="ignored ui info message">Labels can contain individual icons without text.</div>
    <div class="ui icon label">
      <i class="mail icon"></i>
    </div>
    <div class="ui icon label">
      <i class="dog icon"></i>
    </div>
    <div class="ui icon label">
      <i class="cat icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelIcon3',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'label',
    title1: 'Content',
    title2: 'Icon',
    description: 'A label can include an icon',
    model: '    <div class="ignored ui info message">Labels can contain individual icons without text.</div>\n' +
      '    <div class="ui icon label">\n' +
      '      <i class="mail icon"></i>\n' +
      '    </div>\n' +
      '    <div class="ui icon label">\n' +
      '      <i class="dog icon"></i>\n' +
      '    </div>\n' +
      '    <div class="ui icon label">\n' +
      '      <i class="cat icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
