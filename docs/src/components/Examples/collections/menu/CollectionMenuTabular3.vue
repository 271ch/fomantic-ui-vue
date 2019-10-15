<template>
  <div>
    <div class="ui top attached segment">
      <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
    </div>
    <div class="ui bottom attached tabular menu">
      <a class="active item">
        Active Project
      </a>
      <a class="item">
        Project #2
      </a>
      <a class="item">
        Project #3
      </a>
      <div class="right menu">
        <a class="item">
          <i class="add icon"/> New Tab
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuTabular3',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Tabular',
    description: 'A menu can be formatted to show tabs of information',
    model: '    <div class="ui top attached segment">\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '    </div>\n' +
      '    <div class="ui bottom attached tabular menu">\n' +
      '      <a class="active item">\n' +
      '        Active Project\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Project #2\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Project #3\n' +
      '      </a>\n' +
      '      <div class="right menu">\n' +
      '        <a class="item">\n' +
      '          <i class="add icon"/> New Tab\n' +
      '        </a>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
