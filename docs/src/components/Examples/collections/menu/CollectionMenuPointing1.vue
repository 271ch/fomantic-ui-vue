<template>
  <div>
    <div class="ui pointing menu">
      <a class="active item">
        Home
      </a>
      <a class="item">
        Messages
      </a>
      <a class="item">
        Friends
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui transparent icon input">
            <input type="text" placeholder="Search..."/>
            <i class="search link icon"/>
          </div>
        </div>
      </div>
    </div>
    <div class="ui segment">
      <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuPointing1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Pointing',
    description: 'A menu can point to show its relationship to nearby content',
    model: '    <div class="ui pointing menu">\n' +
      '      <a class="active item">\n' +
      '        Home\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Messages\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Friends\n' +
      '      </a>\n' +
      '      <div class="right menu">\n' +
      '        <div class="item">\n' +
      '          <div class="ui transparent icon input">\n' +
      '            <input type="text" placeholder="Search..."/>\n' +
      '            <i class="search link icon"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '    </div>\n',
  },
};
</script>
