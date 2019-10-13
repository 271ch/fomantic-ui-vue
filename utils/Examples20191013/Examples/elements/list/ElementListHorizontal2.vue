<template>
  <div>
    <div class="ui ordered horizontal list">
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/tom.jpg"/>
        <div class="content">
          <div class="header">Steve Jobes</div>
          50 Points
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/stevie.jpg"/>
        <div class="content">
          <div class="header">Stevie Feliciano</div>
          44 Points
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"/>
        <div class="content">
          <div class="header">Jenny Hess</div>
          11 Points
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListHorizontal2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Variations',
      title2: 'Horizontal',
      description: 'A list can be formatted to have items appear horizontally',
      model: '    <div class="ui ordered horizontal list">\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/tom.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Steve Jobes</div>\n' +
      '          50 Points\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/stevie.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Stevie Feliciano</div>\n' +
      '          44 Points\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Jenny Hess</div>\n' +
      '          11 Points\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
