<template>
  <div>
    <FuiButtons vertical labeledIcon>
      <FuiButton>
        <FuiIcon name=pause></FuiIcon>
        Pause
      </FuiButton>
      <FuiButton>
        <FuiIcon name=play></FuiIcon>
        Play
      </FuiButton>
      <FuiButton>
        <FuiIcon name=shuffle></FuiIcon>
        Shuffle
      </FuiButton>
    </FuiButtons>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonLabeledIconButtons1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Labeled Icon Buttons',
    description: 'Groups can be formatted as labeled icons',
    model: '    <div class="ui vertical labeled icon buttons">\n' +
      '      <button class="ui button">\n' +
      '        <i class="pause icon"></i>\n' +
      '        Pause\n' +
      '      </button>\n' +
      '      <button class="ui button">\n' +
      '        <i class="play icon"></i>\n' +
      '        Play\n' +
      '      </button>\n' +
      '      <button class="ui button">\n' +
      '        <i class="shuffle icon"></i>\n' +
      '        Shuffle\n' +
      '      </button>\n' +
      '    </div>\n',
  },
};
</script>
