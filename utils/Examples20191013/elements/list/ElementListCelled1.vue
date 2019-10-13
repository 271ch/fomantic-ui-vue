<template>
  <div>
    <div class="ui celled list">
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/helen.jpg"/>
        <div class="content">
          <div class="header">Snickerdoodle</div>
          An excellent companion
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
        <div class="content">
          <div class="header">Poodle</div>
          A poodle, its pretty basic
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
        <div class="content">
          <div class="header">Paulo</div>
          He's also a dog
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListCelled1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Variations',
      title2: 'Celled',
      description: 'A list can divide its items into cells',
      model: '    <div class="ui celled list">\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/helen.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Snickerdoodle</div>\n' +
      '          An excellent companion\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/daniel.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Poodle</div>\n' +
      '          A poodle, its pretty basic\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/daniel.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Paulo</div>\n' +
      '          He\'s also a dog\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
