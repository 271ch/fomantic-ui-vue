<template>
  <div>
      <div class="ui two column grid">
        <div class="column">
          <div class="ui three column grid">
            <div class="column"/>
            <div class="column"/>
            <div class="column"/>
          </div>
        </div>
        <div class="column"/>
        <div class="column"/>
        <div class="column">
          <div class="ui grid">
            <div class="ten wide column"/>
            <div class="six wide column"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridNestingGrids1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'grid',
    title1: 'Varying Grids',
    title2: 'Nesting Grids',
    description: 'Grids can be placed inside of other grids, letting you sub-divide columns.',
    model: '      <div class="ui two column grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui three column grid">\n' +
      '            <div class="column"/>\n' +
      '            <div class="column"/>\n' +
      '            <div class="column"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column"/>\n' +
      '        <div class="column">\n' +
      '          <div class="ui grid">\n' +
      '            <div class="ten wide column"/>\n' +
      '            <div class="six wide column"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
