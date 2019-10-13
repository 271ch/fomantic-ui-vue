<template>
  <div>
    <div class="ui horizontal cards">
      <div class="card">
        <div class="image">
          <img src="/images/avatar2/large/matthew.png"/>
        </div>
        <div class="content">
          <div class="header">Matt Giampietro</div>
          <div class="meta">
            <a>Friends</a>
          </div>
          <div class="description">
            Matthew is an interior designer living in New York.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="/images/avatar2/large/molly.png"/>
        </div>
        <div class="content">
          <div class="header">Molly</div>
          <div class="meta">
            <span class="date">Coworker</span>
          </div>
          <div class="description">
            Molly is a personal assistant living in Paris.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardHorizontalCards2',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'card',
      title1: 'Variations',
      title2: 'Horizontal Cards',
      description: 'A card can display horizontally',
      model: '    <div class="ui horizontal cards">\n' +
      '      <div class="card">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/avatar2/large/matthew.png"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Matt Giampietro</div>\n' +
      '          <div class="meta">\n' +
      '            <a>Friends</a>\n' +
      '          </div>\n' +
      '          <div class="description">\n' +
      '            Matthew is an interior designer living in New York.\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="card">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/avatar2/large/molly.png"/>\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Molly</div>\n' +
      '          <div class="meta">\n' +
      '            <span class="date">Coworker</span>\n' +
      '          </div>\n' +
      '          <div class="description">\n' +
      '            Molly is a personal assistant living in Paris.\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
