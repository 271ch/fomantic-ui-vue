<template>
  <div>
    <div class="ui action input">
      <input type="text" placeholder="Search..."/>
      <select class="ui compact selection dropdown">
        <option value="all">All</option>
        <option selected="selected" value="articles">Articles</option>
        <option value="products">Products</option>
      </select>
      <div class="ui button">Search</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputAction4',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Action',
    description: 'An input can be formatted to alert the user to an action they may perform',
    model: '    <div class="ui action input">\n' +
      '      <input type="text" placeholder="Search..."/>\n' +
      '      <select class="ui compact selection dropdown">\n' +
      '        <option value="all">All</option>\n' +
      '        <option selected="selected" value="articles">Articles</option>\n' +
      '        <option value="products">Products</option>\n' +
      '      </select>\n' +
      '      <div class="ui button">Search</div>\n' +
      '    </div>\n',
  },
};
</script>
