<template>
  <div>
    <FuiButton tag=div labeled focusable>
      <FuiButton tag=div color=red>
        <FuiIcon name=heart></FuiIcon> Like
      </FuiButton>
      <FuiLabel tag=a basic color=red pointing=left>
        1,048
      </FuiLabel>
    </FuiButton>
    <FuiButton tag=div labeled focusable>
      <FuiButton tag=div basic color=blue>
        <FuiIcon name=fork></FuiIcon> Forks
      </FuiButton>
      <FuiLabel tag=a basic color=blue pointing=left>
        1,048
      </FuiLabel>
    </FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonLabeled2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Types',
    title2: 'Labeled',
    description: 'A button can appear alongside a',
    model: '    <div tabindex="0" class="ui labeled button">\n' +
      '      <div class="ui red button">\n' +
      '        <i class="heart icon"></i> Like\n' +
      '      </div>\n' +
      '      <a class="ui left pointing red basic label">\n' +
      '        1,048\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <div tabindex="0" class="ui labeled button">\n' +
      '      <div class="ui blue basic button">\n' +
      '        <i class="fork icon"></i> Forks\n' +
      '      </div>\n' +
      '      <a class="ui left pointing blue basic label">\n' +
      '        1,048\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
