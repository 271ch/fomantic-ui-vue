<template>
  <div>
      <div class="ui celled grid">
        <div class="row">
          <div class="three wide column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="thirteen wide column">
            <img class="ui wireframe image" src="/images/wireframe/centered-paragraph.png"/>
          </div>
        </div>
        <div class="row">
          <div class="three wide column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
          <div class="ten wide column">
            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          </div>
          <div class="three wide column">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridCelled1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'grid',
    title1: 'Types',
    title2: 'Celled',
    description: 'A grid can have rows divided into cells',
    model: '      <div class="ui celled grid">\n' +
      '        <div class="row">\n' +
      '          <div class="three wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="thirteen wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/centered-paragraph.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="three wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="ten wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          </div>\n' +
      '          <div class="three wide column">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
