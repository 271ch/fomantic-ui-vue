<template>
  <div>
    <div class="ui three column grid">
      <div class="column">
        <div class="ui fluid card">
          <div class="image">
            <img src="/images/avatar/large/daniel.jpg"/>
          </div>
          <div class="content">
            <a class="header">Daniel Louise</a>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ui fluid card">
          <div class="image">
            <img src="/images/avatar/large/helen.jpg"/>
          </div>
          <div class="content">
            <a class="header">Helen Troy</a>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ui fluid card">
          <div class="image">
            <img src="/images/avatar/large/elliot.jpg"/>
          </div>
          <div class="content">
            <a class="header">Elliot Fu</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardFluidCard1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'card',
      title1: 'Variations',
      title2: 'Fluid Card',
      description: 'A fluid card takes up the width of its container',
      model: '    <div class="ui three column grid">\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid card">\n' +
      '          <div class="image">\n' +
      '            <img src="/images/avatar/large/daniel.jpg"/>\n' +
      '          </div>\n' +
      '          <div class="content">\n' +
      '            <a class="header">Daniel Louise</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid card">\n' +
      '          <div class="image">\n' +
      '            <img src="/images/avatar/large/helen.jpg"/>\n' +
      '          </div>\n' +
      '          <div class="content">\n' +
      '            <a class="header">Helen Troy</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid card">\n' +
      '          <div class="image">\n' +
      '            <img src="/images/avatar/large/elliot.jpg"/>\n' +
      '          </div>\n' +
      '          <div class="content">\n' +
      '            <a class="header">Elliot Fu</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
