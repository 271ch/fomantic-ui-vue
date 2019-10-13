<template>
  <div>
    <div class="ui label">
      <i class="mail icon"/>
      Mail
    </div>
    <div class="ui label">
      <i class="checkmark icon"/>
      Test Passed
    </div>
    <div class="ui label">
      <i class="dog icon"/>
      Dog
    </div>
    <div class="ui label">
      <i class="cat icon"/>
      Cat
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelIcon1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Content',
      title2: 'Icon',
      description: 'A label can include an icon',
      model: '    <div class="ui label">\n' +
      '      <i class="mail icon"/>\n' +
      '      Mail\n' +
      '    </div>\n' +
      '    <div class="ui label">\n' +
      '      <i class="checkmark icon"/>\n' +
      '      Test Passed\n' +
      '    </div>\n' +
      '    <div class="ui label">\n' +
      '      <i class="dog icon"/>\n' +
      '      Dog\n' +
      '    </div>\n' +
      '    <div class="ui label">\n' +
      '      <i class="cat icon"/>\n' +
      '      Cat\n' +
      '    </div>\n',
    };
  },
};
</script>
