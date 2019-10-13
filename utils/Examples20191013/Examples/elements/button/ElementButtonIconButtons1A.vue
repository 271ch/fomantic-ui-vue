<template>
  <div>
    <div class="ui icon buttons">
      <button class="ui button">
        <i class="play icon"/>
      </button>
      <button class="ui button">
        <i class="pause icon"/>
      </button>
      <button class="ui button">
        <i class="shuffle icon"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonIconButtons1A',
  data: function () {
    return {
      converted: false,
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
    };
  },
};
</script>
