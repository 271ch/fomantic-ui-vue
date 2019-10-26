<template>
  <div>
    <FuiMenu pointing vertical>
      <FuiItem a>
        Site Title
      </FuiItem>
      <FuiItem>
        <b>Grouped Section</b>
        <FuiMenu sub>
          <FuiItem a>Subsection 1</FuiItem>
          <FuiItem a active>Subsection 1</FuiItem>
          <FuiItem a>Subsection 1</FuiItem>
        </FuiMenu>
      </FuiItem>
      <FuiItem dropdown>
        Dropdown <FuiIcon name=dropdown></FuiIcon>
        <FuiMenu sub>
          <FuiItem>Choice 1</FuiItem>
          <FuiItem>Choice 2</FuiItem>
          <FuiItem>Choice 3</FuiItem>
        </FuiMenu>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenu1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: '???',
    description: 'A vertical menu can point to content adjacent to itself to show ownership',
    model: '    <div class="ui pointing vertical menu">\n' +
      '      <a class="item">\n' +
      '        Site Title\n' +
      '      </a>\n' +
      '      <div class="item">\n' +
      '        <b>Grouped Section</b>\n' +
      '        <div class="menu">\n' +
      '          <a class="item">Subsection 1</a>\n' +
      '          <a class="active item">Subsection 1</a>\n' +
      '          <a class="item">Subsection 1</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui dropdown item">\n' +
      '        Dropdown <i class="dropdown icon"></i>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">Choice 1</div>\n' +
      '          <div class="item">Choice 2</div>\n' +
      '          <div class="item">Choice 3</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
