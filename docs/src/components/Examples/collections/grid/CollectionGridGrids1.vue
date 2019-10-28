<template>
  <div>
      <div class="ui ignored toggle animation checkbox">
        <input type="checkbox" name="animation"/>
        <label>Toggle Animation</label>
      </div>
      <div class="ui ignored hidden divider"/>
      <div class="ui grid">
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
        <div class="four wide column"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridGrids1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'grid',
    title1: 'Introduction',
    title2: 'Grids',
    description: '???',
    model: '      <div class="ui ignored toggle animation checkbox">\n' +
      '        <input type="checkbox" name="animation"/>\n' +
      '        <label>Toggle Animation</label>\n' +
      '      </div>\n' +
      '      <div class="ui ignored hidden divider"/>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '        <div class="four wide column"/>\n' +
      '      </div>\n',
  },
};
</script>
