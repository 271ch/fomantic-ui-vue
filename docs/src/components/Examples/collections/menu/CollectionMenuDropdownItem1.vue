<template>
  <div>
    <div class="ui ignored message">
      <p>To have a dropdown open without Javascript, use the <a href="/modules/dropdown.html#simple">simple</a> variation</p>
    </div>
    <div class="ui vertical menu">
      <div class="ui dropdown item">
        Categories
        <i class="dropdown icon"/>
        <div class="menu">
          <a class="item">Electronics</a>
          <a class="item">Automotive</a>
          <a class="item">Home</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuDropdownItem1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Dropdown Item',
    description: 'An item may contain a nested menu in a',
    model: '    <div class="ui ignored message">\n' +
      '      <p>To have a dropdown open without Javascript, use the <a href="/modules/dropdown.html#simple">simple</a> variation</p>\n' +
      '    </div>\n' +
      '    <div class="ui vertical menu">\n' +
      '      <div class="ui dropdown item">\n' +
      '        Categories\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '          <a class="item">Electronics</a>\n' +
      '          <a class="item">Automotive</a>\n' +
      '          <a class="item">Home</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
