<template>
  <div>
    <div class="ui relaxed horizontal list">
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
        <div class="content">
          <a class="header">Daniel Louise</a>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/stevie.jpg"/>
        <div class="content">
          <a class="header">Stevie Feliciano</a>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/elliot.jpg"/>
        <div class="content">
          <a class="header">Elliot Fu</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListRelaxed2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Variations',
      title2: 'Relaxed',
      description: 'A list can relax its padding to provide more negative space',
      model: '    <div class="ui relaxed horizontal list">\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/daniel.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Daniel Louise</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/stevie.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Stevie Feliciano</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/elliot.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <a class="header">Elliot Fu</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
