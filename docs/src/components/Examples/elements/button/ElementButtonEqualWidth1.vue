<template>
  <div>
    <FuiButtons equalWidth=five>
      <FuiButton>Overview</FuiButton>
      <FuiButton>Specs</FuiButton>
      <FuiButton>Warranty</FuiButton>
      <FuiButton>Reviews</FuiButton>
      <FuiButton>Support</FuiButton>
    </FuiButtons>
    <FuiDivider ignored></FuiDivider>
    <FuiButtons equalWidth=three>
      <FuiButton>Overview</FuiButton>
      <FuiButton>Specs</FuiButton>
      <FuiButton>Support</FuiButton>
    </FuiButtons>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonEqualWidth1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Equal Width',
    description: 'Groups can have their widths divided evenly',
    model: '    <div class="ui five buttons">\n' +
      '      <button class="ui button">Overview</button>\n' +
      '      <button class="ui button">Specs</button>\n' +
      '      <button class="ui button">Warranty</button>\n' +
      '      <button class="ui button">Reviews</button>\n' +
      '      <button class="ui button">Support</button>\n' +
      '    </div>\n' +
      '    <div class="ui ignored divider"></div>\n' +
      '    <div class="ui three buttons">\n' +
      '      <button class="ui button">Overview</button>\n' +
      '      <button class="ui button">Specs</button>\n' +
      '      <button class="ui button">Support</button>\n' +
      '    </div>\n',
  },
};
</script>
