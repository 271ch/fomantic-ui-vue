<template>
  <div>
    <div class="ui ignored info message">
      Be sure content can fit on one line when using the animated variation, otherwise text content will reflow when hovered.
    </div>
    <div class="ui middle aligned animated list">
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
  name: 'ElementListAnimated1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Variations',
      title2: 'Animated',
      description: 'A list can animate to set the current item apart from the list',
      model: '    <div class="ui ignored info message">\n' +
      '      Be sure content can fit on one line when using the animated variation, otherwise text content will reflow when hovered.\n' +
      '    </div>\n' +
      '    <div class="ui middle aligned animated list">\n' +
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
