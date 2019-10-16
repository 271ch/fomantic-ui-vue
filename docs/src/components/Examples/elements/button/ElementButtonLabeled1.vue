<template>
  <div>
    <FuiButton tag=div focusable labeled>
      <FuiButton tag=div>
        <FuiIcon name=heart></FuiIcon> Like
      </FuiButton>
      <FuiLabel tag=a basic>
        2,048
      </FuiLabel>
    </FuiButton>
    <FuiButton tag=div focusable labeled=left>
      <FuiLabel tag=a basic pointing=right>
        2,048
      </FuiLabel>
      <FuiButton tag=div>
        <FuiIcon name=heart></FuiIcon> Like
      </FuiButton>
    </FuiButton>
    <FuiButton tag=div focusable labeled=left>
      <FuiLabel tag=a basic>
        1,048
      </FuiLabel>
      <FuiButton icon tag=div>
        <FuiIcon name=fork></FuiIcon>
      </FuiButton>
    </FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonLabeled1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Types',
    title2: 'Labeled',
    description: 'A button can appear alongside a',
    model: '    <div class="ui labeled button" tabindex="0">\n' +
      '      <div class="ui button">\n' +
      '        <i class="heart icon"/> Like\n' +
      '      </div>\n' +
      '      <a class="ui basic label">\n' +
      '        2,048\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <div class="ui left labeled button" tabindex="0">\n' +
      '      <a class="ui right pointing basic label">\n' +
      '        2,048\n' +
      '      </a>\n' +
      '      <div class="ui button">\n' +
      '        <i class="heart icon"/> Like\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui left labeled button" tabindex="0">\n' +
      '      <a class="ui basic label">\n' +
      '        1,048\n' +
      '      </a>\n' +
      '      <div class="ui icon button">\n' +
      '        <i class="fork icon"/>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
