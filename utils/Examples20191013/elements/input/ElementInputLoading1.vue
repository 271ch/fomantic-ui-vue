<template>
  <div>
    <div class="ui ignored message">Loading inputs automatically modify the input's icon on loading state to show loading indication</div>
    <div class="ui left icon input loading">
      <input type="text" placeholder="Search..."/>
      <i class="search icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLoading1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'States',
    title2: 'Loading',
    description: 'An icon input field can show that it is currently loading data',
    model: '    <div class="ui ignored message">Loading inputs automatically modify the input\'s icon on loading state to show loading indication</div>\n' +
      '    <div class="ui left icon input loading">\n' +
      '      <input type="text" placeholder="Search..."/>\n' +
      '      <i class="search icon"/>\n' +
      '    </div>\n',
  },
};
</script>
