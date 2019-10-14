<template>
  <div>
    <div class="ui menu">
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search..."/>
          <i class="search icon"/>
        </div>
      </div>
      <div class="right item">
        <div class="ui action input">
          <input type="text" placeholder="Navigate to..."/>
          <div class="ui button">Go</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuInput1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Input',
    description: 'A menu item can contain an',
    model: '    <div class="ui menu">\n' +
      '      <div class="item">\n' +
      '        <div class="ui icon input">\n' +
      '          <input type="text" placeholder="Search..."/>\n' +
      '          <i class="search icon"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="right item">\n' +
      '        <div class="ui action input">\n' +
      '          <input type="text" placeholder="Navigate to..."/>\n' +
      '          <div class="ui button">Go</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
