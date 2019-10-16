<template>
  <div>
    <FuiButtons icon>
      <FuiButton>
        <FuiIcon name=play></FuiIcon>
      </FuiButton>
      <FuiButton>
        <FuiIcon name=pause></FuiIcon>
      </FuiButton>
      <FuiButton>
        <FuiIcon name=shuffle></FuiIcon>
      </FuiButton>
    </FuiButtons>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonIconButtons1A',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Icon Buttons',
    description: 'Groups can be formatted as icons',
    model: '    <div class="ui icon buttons">\n' +
      '      <button class="ui button">\n' +
      '        <i class="play icon"/>\n' +
      '      </button>\n' +
      '      <button class="ui button">\n' +
      '        <i class="pause icon"/>\n' +
      '      </button>\n' +
      '      <button class="ui button">\n' +
      '        <i class="shuffle icon"/>\n' +
      '      </button>\n' +
      '    </div>\n',
  },
};
</script>
