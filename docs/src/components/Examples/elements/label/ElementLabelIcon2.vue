<template>
  <div>
    <FuiLabel icon=right>
      Mail
      <FuiIcon name=mail></FuiIcon>
    </FuiLabel>
    <FuiLabel icon=right>
      Test Passed
      <FuiIcon name=checkmark></FuiIcon>
    </FuiLabel>
    <FuiLabel icon=right>
      Dog
      <FuiIcon name=dog></FuiIcon>
    </FuiLabel>
    <FuiLabel icon=right>
      Cat
      <FuiIcon name=cat></FuiIcon>
    </FuiLabel>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelIcon2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Content',
    title2: 'Icon',
    description: 'A label can include an icon',
    model: '    <div class="ui right icon label">\n' +
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
