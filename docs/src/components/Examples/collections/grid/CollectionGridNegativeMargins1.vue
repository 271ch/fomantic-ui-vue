<template>
  <div>
       <div class="ui top attached button">Button before grid</div>
       <div class="ui grid">
        <div class="sixteen wide column"/>
        <div class="ten wide column"/>
        <div class="six wide column"/>
      </div>
      <div class="ui grid">
        <div class="sixteen wide column"/>
      </div>
      <div class="ui bottom attached button">Button after grid</div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridNegativeMargins1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'grid',
    title1: 'Introduction',
    title2: 'Negative Margins',
    description: '???',
    model: '       <div class="ui top attached button">Button before grid</div>\n' +
      '       <div class="ui grid">\n' +
      '        <div class="sixteen wide column"/>\n' +
      '        <div class="ten wide column"/>\n' +
      '        <div class="six wide column"/>\n' +
      '      </div>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="sixteen wide column"/>\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached button">Button after grid</div>\n',
  },
};
</script>
