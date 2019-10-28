<template>
  <div>
      <div class="ui two column centered grid">
        <div class="column"/>
        <div class="four column centered row">
          <div class="column"/>
          <div class="column"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridCenteringContent1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'grid',
    title1: 'Varying Grids',
    title2: 'Centering Content',
    description: 'If a row does not take up all sixteen grid columns, you can use a',
    model: '      <div class="ui two column centered grid">\n' +
      '        <div class="column"/>\n' +
      '        <div class="four column centered row">\n' +
      '          <div class="column"/>\n' +
      '          <div class="column"/>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
