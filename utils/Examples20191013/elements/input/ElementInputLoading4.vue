<template>
  <div>
    <div class="ui icon input red fast elastic loading">
        <input type="text" placeholder="Search..."/>
        <i class="search icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLoading4',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'States',
      title2: 'Loading',
      description: 'An icon input field can show that it is currently loading data',
      model: '    <div class="ui icon input red fast elastic loading">\n' +
      '        <input type="text" placeholder="Search..."/>\n' +
      '        <i class="search icon"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
