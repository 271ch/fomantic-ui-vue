<template>
  <div>
    <FuiButtonGroup basic>
      <FuiButton tag=div>One</FuiButton>
      <FuiButton tag=div>Two</FuiButton>
      <FuiButton tag=div>Three</FuiButton>
    </FuiButtonGroup>
    <FuiDivider></FuiDivider>
    <FuiButtonGroup vertical basic>
      <FuiButton>One</FuiButton>
      <FuiButton>Two</FuiButton>
      <FuiButton>Three</FuiButton>
    </FuiButtonGroup>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonBasicButtons1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Basic Buttons',
    description: 'A button group can be less pronounced',
    model: '    <div class="ui basic buttons">\n' +
      '      <div class="ui button">One</div>\n' +
      '      <div class="ui button">Two</div>\n' +
      '      <div class="ui button">Three</div>\n' +
      '    </div>\n' +
      '    <div class="ui divider"/>\n' +
      '    <div class="ui vertical basic buttons">\n' +
      '      <button class="ui button">One</button>\n' +
      '      <button class="ui button">Two</button>\n' +
      '      <button class="ui button">Three</button>\n' +
      '    </div>\n',
  },
};
</script>
