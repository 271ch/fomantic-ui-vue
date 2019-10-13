<template>
  <div>
    <div class="ui horizontal list">
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/tom.jpg"/>
        <div class="content">
          <div class="header">Tom</div>
          Top Contributor
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/christian.jpg"/>
        <div class="content">
          <div class="header">Christian Rocha</div>
          Admin
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/matt.jpg"/>
        <div class="content">
          <div class="header">Matt</div>
          Top Rated User
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListHorizontal1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Variations',
      title2: 'Horizontal',
      description: 'A list can be formatted to have items appear horizontally',
      model: '    <div class="ui horizontal list">\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/tom.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Tom</div>\n' +
      '          Top Contributor\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/christian.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Christian Rocha</div>\n' +
      '          Admin\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/matt.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Matt</div>\n' +
      '          Top Rated User\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
