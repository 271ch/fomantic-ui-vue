<template>
  <div>
      <div class="ui bulleted ignored list">
        <div class="item">Loading images without specified size</div>
        <div class="item">Setting CSS which adjusts the layout of the page</div>
        <div class="item">Hiding elements using Javascript</div>
      </div>
      <div class="ui code">
        // recalculates offsets
        $('.ui.sticky')
          .sticky('refresh')
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleStickyRefreshingCachedValues1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sticky',
    title1: 'Usage',
    title2: 'Refreshing Cached Values',
    description: '???',
    model: '      <div class="ui bulleted ignored list">\n' +
      '        <div class="item">Loading images without specified size</div>\n' +
      '        <div class="item">Setting CSS which adjusts the layout of the page</div>\n' +
      '        <div class="item">Hiding elements using Javascript</div>\n' +
      '      </div>\n' +
      '      <div class="ui code">\n' +
      '        // recalculates offsets\n' +
      '        $(\'.ui.sticky\')\n' +
      '          .sticky(\'refresh\')\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
