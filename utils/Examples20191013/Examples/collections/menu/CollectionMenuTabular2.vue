<template>
  <div>
    <div class="ui top attached tabular menu">
      <a class="active item">
        Bio
      </a>
      <a class="item">
        Photos
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui transparent icon input">
            <input type="text" placeholder="Search users..."/>
            <i class="search link icon"/>
          </div>
        </div>
      </div>
    </div>
    <div class="ui bottom attached segment">
      <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuTabular2',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'menu',
      title1: 'Types',
      title2: 'Tabular',
      description: 'A menu can be formatted to show tabs of information',
      model: '    <div class="ui top attached tabular menu">\n' +
      '      <a class="active item">\n' +
      '        Bio\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Photos\n' +
      '      </a>\n' +
      '      <div class="right menu">\n' +
      '        <div class="item">\n' +
      '          <div class="ui transparent icon input">\n' +
      '            <input type="text" placeholder="Search users..."/>\n' +
      '            <i class="search link icon"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui bottom attached segment">\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
