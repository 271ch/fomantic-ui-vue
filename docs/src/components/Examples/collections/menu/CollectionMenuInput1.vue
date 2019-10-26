<template>
  <div>
    <FuiMenu>
      <FuiItem>
        <FuiInput icon placeholder="Search...">
          <FuiIcon name=search></FuiIcon>
        </FuiInput>
      </FuiItem>
      <FuiItem right>
        <FuiInput action placeholder="Navigate to...">
          <FuiButton tag=div>Go</FuiButton>
        </FuiInput>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuInput1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Input',
    description: 'A menu item can contain an',
    model: '    <div class="ui menu">\n' +
      '      <div class="item">\n' +
      '        <div class="ui icon input">\n' +
      '          <input type="text" placeholder="Search...">\n' +
      '          <i class="search icon"></i>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="right item">\n' +
      '        <div class="ui action input">\n' +
      '          <input type="text" placeholder="Navigate to...">\n' +
      '          <div class="ui button">Go</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
