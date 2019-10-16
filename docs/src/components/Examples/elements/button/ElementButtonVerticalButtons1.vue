<template>
  <div>
    <FuiButtons vertical>
      <FuiButton>Feed</FuiButton>
      <FuiButton>Messages</FuiButton>
      <FuiButton>Events</FuiButton>
      <FuiButton>Photos</FuiButton>
    </FuiButtons>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonVerticalButtons1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Vertical Buttons',
    description: 'Groups can be formatted to appear vertically',
    model: '    <div class="ui vertical buttons">\n' +
      '      <button class="ui button">Feed</button>\n' +
      '      <button class="ui button">Messages</button>\n' +
      '      <button class="ui button">Events</button>\n' +
      '      <button class="ui button">Photos</button>\n' +
      '    </div>\n',
  },
};
</script>
