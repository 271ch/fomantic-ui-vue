<template>
  <div>
    <div class="ignored ui info message">Labels can contain individual icons without text.</div>
    <div class="ui icon label">
      <i class="mail icon"/>
    </div>
    <div class="ui icon label">
      <i class="dog icon"/>
    </div>
    <div class="ui icon label">
      <i class="cat icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelIcon3',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Content',
      title2: 'Icon',
      description: 'A label can include an icon',
      model: '    <div class="ignored ui info message">Labels can contain individual icons without text.</div>\n' +
      '    <div class="ui icon label">\n' +
      '      <i class="mail icon"/>\n' +
      '    </div>\n' +
      '    <div class="ui icon label">\n' +
      '      <i class="dog icon"/>\n' +
      '    </div>\n' +
      '    <div class="ui icon label">\n' +
      '      <i class="cat icon"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
