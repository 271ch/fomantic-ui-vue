<template>
  <div>
    <FuiLabel icon>
      <FuiIcon name=mail></FuiIcon>
    </FuiLabel>
    <FuiLabel icon>
      <FuiIcon name=dog></FuiIcon>
    </FuiLabel>
    <FuiLabel icon>
      <FuiIcon name=cat></FuiIcon>
    </FuiLabel>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelIcon3',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Content',
    title2: 'Icon',
    description: 'A label can include an icon',
    model: '    <div class="ui icon label">\n' +
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
