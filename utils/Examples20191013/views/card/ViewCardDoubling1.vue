<template>
  <div>
    <div class="ui ignored warning message">Resize your browser to a smaller size to see the cards stack after reaching mobile breakpoints</div>
    <div class="ui six doubling cards">
      <div class="card">
        <div class="image">
          <img src="/images/avatar/large/elliot.jpg"/>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="/images/avatar/large/helen.jpg"/>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="/images/avatar/large/jenny.jpg"/>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="/images/avatar/large/veronika.jpg"/>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="/images/avatar/large/stevie.jpg"/>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="/images/avatar/large/steve.jpg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardDoubling1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'card',
      title1: 'Variations',
      title2: 'Doubling',
      description: 'A group of cards can double its column width for mobile',
      model: '    <div class="ui ignored warning message">Resize your browser to a smaller size to see the cards stack after reaching mobile breakpoints</div>\n' +
      '    <div class="ui six doubling cards">\n' +
      '      <div class="card">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/avatar/large/elliot.jpg"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="card">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/avatar/large/helen.jpg"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="card">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/avatar/large/jenny.jpg"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="card">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/avatar/large/veronika.jpg"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="card">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/avatar/large/stevie.jpg"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="card">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/avatar/large/steve.jpg"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
