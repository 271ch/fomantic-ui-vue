<template>
  <div>
    <div class="ui ignored info message">Inputs will automatically size themselves unless you manually declare a width</div>
    <div class="ui mini icon input">
      <input type="text" placeholder="Search mini..."/>
      <i class="search icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputSize1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Size',
    description: 'An input can vary in size',
    model: '    <div class="ui ignored info message">Inputs will automatically size themselves unless you manually declare a width</div>\n' +
      '    <div class="ui mini icon input">\n' +
      '      <input type="text" placeholder="Search mini..."/>\n' +
      '      <i class="search icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
