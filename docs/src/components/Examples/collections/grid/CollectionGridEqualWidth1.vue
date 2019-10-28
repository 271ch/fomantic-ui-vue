<template>
  <div>
      <div class="ui equal width grid">
        <div class="column">
          <div class="ui segment">
            1
          </div>
        </div>
        <div class="eight wide column">
          <div class="ui segment">
            2
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            3
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridEqualWidth1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Equal Width',
    description: 'A grid can automatically resize all elements to split the available width evenly',
    model: '      <div class="ui equal width grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            1\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="eight wide column">\n' +
      '          <div class="ui segment">\n' +
      '            2\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            3\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
