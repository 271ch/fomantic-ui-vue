<template>
  <div>
    <div class="ui compact vertical labeled icon menu">
      <a class="item">
        <i class="gamepad icon"/>
        Games
      </a>
      <a class="item">
        <i class="video camera icon"/>
        Channels
      </a>
      <a class="item">
        <i class="video play icon"/>
        Videos
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuCompact2',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Compact',
    description: 'A menu can take up only the space necessary to fit its content',
    model: '    <div class="ui compact vertical labeled icon menu">\n' +
      '      <a class="item">\n' +
      '        <i class="gamepad icon"/>\n' +
      '        Games\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video camera icon"/>\n' +
      '        Channels\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video play icon"/>\n' +
      '        Videos\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
