<template>
  <div>
    <div class="ui massive horizontal divided list">
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/helen.jpg"/>
        <div class="content">
          <div class="header">Helen</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/christian.jpg"/>
        <div class="content">
          <div class="header">Christian</div>
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
        <div class="content">
          <div class="header">Daniel</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListSize7',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Variations',
      title2: 'Size',
      description: 'A list can vary in size',
      model: '    <div class="ui massive horizontal divided list">\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/helen.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Helen</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/christian.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Christian</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img class="ui avatar image" src="/images/avatar/small/daniel.jpg"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Daniel</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
