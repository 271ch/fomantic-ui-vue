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
      <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
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
      '      <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '    </div>\n',
  },
};
</script>
