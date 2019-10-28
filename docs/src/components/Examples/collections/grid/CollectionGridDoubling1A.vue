<template>
  <div>
      <div class="ui text message info ignore">
        A grid will round its columns to the closest reasonable value when doubling, for example a <code>five column grid</code> will use <code>2 mobile, 3 tablet, 5 desktop</code>. To force 1 column on mobile you can add <a href="#stackable"><code>stackable</code></a>
      </div>
      <div class="five column doubling ui grid">
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <div class="column">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridDoubling1A',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Doubling',
    description: 'A grid can double its column width on tablet and mobile sizes',
    model: '      <div class="ui text message info ignore">\n' +
      '        A grid will round its columns to the closest reasonable value when doubling, for example a <code>five column grid</code> will use <code>2 mobile, 3 tablet, 5 desktop</code>. To force 1 column on mobile you can add <a href="#stackable"><code>stackable</code></a>\n' +
      '      </div>\n' +
      '      <div class="five column doubling ui grid">\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
