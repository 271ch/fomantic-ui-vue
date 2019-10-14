<template>
  <div>
    <div class="ui fluid icon input">
      <input type="text" placeholder="Search a very wide input..."/>
      <i class="search icon"/>
    </div>
    <div class="ui ignored divider"/>
    <div class="ui fluid action input">
      <input type="text" placeholder="Search..."/>
      <div class="ui button">Search</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputFluid1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Fluid',
    description: 'An input can take the size of its container',
    model: '    <div class="ui fluid icon input">\n' +
      '      <input type="text" placeholder="Search a very wide input..."/>\n' +
      '      <i class="search icon"/>\n' +
      '    </div>\n' +
      '    <div class="ui ignored divider"/>\n' +
      '    <div class="ui fluid action input">\n' +
      '      <input type="text" placeholder="Search..."/>\n' +
      '      <div class="ui button">Search</div>\n' +
      '    </div>\n',
  },
};
</script>
