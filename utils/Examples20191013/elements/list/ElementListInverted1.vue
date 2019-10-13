<template>
  <div>
    <div class="ui inverted segment">
      <div class="ui inverted relaxed divided list">
        <div class="item">
          <div class="content">
            <div class="header">Snickerdoodle</div>
            An excellent companion
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="header">Poodle</div>
            A poodle, its pretty basic
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="header">Paulo</div>
            He's also a dog
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListInverted1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Variations',
      title2: 'Inverted',
      description: 'A list can be inverted to appear on a dark background',
      model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui inverted relaxed divided list">\n' +
      '        <div class="item">\n' +
      '          <div class="content">\n' +
      '            <div class="header">Snickerdoodle</div>\n' +
      '            An excellent companion\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="item">\n' +
      '          <div class="content">\n' +
      '            <div class="header">Poodle</div>\n' +
      '            A poodle, its pretty basic\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="item">\n' +
      '          <div class="content">\n' +
      '            <div class="header">Paulo</div>\n' +
      '            He\'s also a dog\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
