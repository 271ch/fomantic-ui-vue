<template>
  <div>
    <FuiLabel>
      <FuiIcon name=mail></FuiIcon>
      Mail
    </FuiLabel>
    <FuiLabel>
      <FuiIcon name=checkmark></FuiIcon>
      Test Passed
    </FuiLabel>
    <FuiLabel>
      <FuiIcon name=dog></FuiIcon>
      Dog
    </FuiLabel>
    <FuiLabel>
      <FuiIcon name=cat></FuiIcon>
      Cat
    </FuiLabel>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelIcon1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Content',
    title2: 'Icon',
    description: 'A label can include an icon',
    model: '    <div class="ui label">\n' +
      '      <i class="mail icon"></i>\n' +
      '      Mail\n' +
      '    </div>\n' +
      '    <div class="ui label">\n' +
      '      <i class="checkmark icon"></i>\n' +
      '      Test Passed\n' +
      '    </div>\n' +
      '    <div class="ui label">\n' +
      '      <i class="dog icon"></i>\n' +
      '      Dog\n' +
      '    </div>\n' +
      '    <div class="ui label">\n' +
      '      <i class="cat icon"></i>\n' +
      '      Cat\n' +
      '    </div>\n',
  },
};
</script>
