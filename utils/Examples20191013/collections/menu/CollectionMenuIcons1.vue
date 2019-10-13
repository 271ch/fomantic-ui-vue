<template>
  <div>
    <div class="ui icon menu">
      <a class="item">
        <i class="gamepad icon"/>
      </a>
      <a class="item">
        <i class="video camera icon"/>
      </a>
      <a class="item">
        <i class="video play icon"/>
      </a>
    </div>
    <br/><br/>
    <div class="ui vertical icon menu">
      <a class="item">
        <i class="gamepad icon"/>
      </a>
      <a class="item">
        <i class="video camera icon"/>
      </a>
      <a class="item">
        <i class="video play icon"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuIcons1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'menu',
      title1: 'Variations',
      title2: 'Icons',
      description: 'A menu may have just icons',
      model: '    <div class="ui icon menu">\n' +
      '      <a class="item">\n' +
      '        <i class="gamepad icon"/>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video camera icon"/>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video play icon"/>\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <br/><br/>\n' +
      '    <div class="ui vertical icon menu">\n' +
      '      <a class="item">\n' +
      '        <i class="gamepad icon"/>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video camera icon"/>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video play icon"/>\n' +
      '      </a>\n' +
      '    </div>\n',
    };
  },
};
</script>
