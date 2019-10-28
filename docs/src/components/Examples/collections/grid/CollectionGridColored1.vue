<template>
  <div>
      <div class="ui equal width center aligned padded grid">
        <div class="row">
          <div class="olive column">
            Olive
          </div>
          <div class="black column">
            Black
          </div>
        </div>
        <div class="row" style="background-color: #869D05;color: #FFFFFF;">
          <div class="column">Custom Row</div>
        </div>
        <div class="row">
          <div class="black column">
            Black
          </div>
          <div class="olive column">
            Olive
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridColored1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'grid',
    title1: 'Varying Grids',
    title2: 'Colored',
    description: '???',
    model: '      <div class="ui equal width center aligned padded grid">\n' +
      '        <div class="row">\n' +
      '          <div class="olive column">\n' +
      '            Olive\n' +
      '          </div>\n' +
      '          <div class="black column">\n' +
      '            Black\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row" style="background-color: #869D05;color: #FFFFFF;">\n' +
      '          <div class="column">Custom Row</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="black column">\n' +
      '            Black\n' +
      '          </div>\n' +
      '          <div class="olive column">\n' +
      '            Olive\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
