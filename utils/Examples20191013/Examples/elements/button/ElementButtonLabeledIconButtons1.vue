<template>
  <div>
    <div class="ui vertical labeled icon buttons">
      <button class="ui button">
        <i class="pause icon"/>
        Pause
      </button>
      <button class="ui button">
        <i class="play icon"/>
        Play
      </button>
      <button class="ui button">
        <i class="shuffle icon"/>
        Shuffle
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonLabeledIconButtons1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Group Variations',
      title2: 'Labeled Icon Buttons',
      description: 'Groups can be formatted as labeled icons',
      model: '    <div class="ui vertical labeled icon buttons">\n' +
      '      <button class="ui button">\n' +
      '        <i class="pause icon"/>\n' +
      '        Pause\n' +
      '      </button>\n' +
      '      <button class="ui button">\n' +
      '        <i class="play icon"/>\n' +
      '        Play\n' +
      '      </button>\n' +
      '      <button class="ui button">\n' +
      '        <i class="shuffle icon"/>\n' +
      '        Shuffle\n' +
      '      </button>\n' +
      '    </div>\n',
    };
  },
};
</script>
