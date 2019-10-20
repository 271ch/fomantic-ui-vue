<template>
  <div>
    <div class="ui menu">
      <div class="ui category search item">
        <div class="ui transparent icon input">
          <input class="prompt" type="text" placeholder="Search animals..."/>
          <i class="search link icon"/>
        </div>
        <div class="results"/>
      </div>
    </div>
    <div class="ui segment">
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuSearch1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Search',
    description: 'A menu can contain a',
    model: '    <div class="ui menu">\n' +
      '      <div class="ui category search item">\n' +
      '        <div class="ui transparent icon input">\n' +
      '          <input class="prompt" type="text" placeholder="Search animals..."/>\n' +
      '          <i class="search link icon"/>\n' +
      '        </div>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
