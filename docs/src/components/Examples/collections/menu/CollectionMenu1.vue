<template>
  <div>
    <div class="ui pointing vertical menu">
      <a class="item">
        Site Title
      </a>
      <div class="item">
        <b>Grouped Section</b>
        <div class="menu">
          <a class="item">Subsection 1</a>
          <a class="active item">Subsection 1</a>
          <a class="item">Subsection 1</a>
        </div>
      </div>
      <div class="ui dropdown item">
        Dropdown <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item">Choice 1</div>
          <div class="item">Choice 2</div>
          <div class="item">Choice 3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenu1',
  info: {
    converted: false,
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
