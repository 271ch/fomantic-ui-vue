<template>
  <div>
      <div class="ui three column grid">
        <div class="column">
          <div class="ui segment">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridColumnContent1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'grid',
    title1: 'Columns',
    title2: 'Column Content',
    description: 'Since columns use padding to create gutters, content stylings should not be applied directly to columns, but to elements inside of columns.',
    model: '      <div class="ui three column grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
