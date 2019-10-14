<template>
  <div>
    <div class="ui secondary  menu">
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
          <div class="ui icon input">
            <input type="text" placeholder="Search..."/>
            <i class="search link icon"/>
          </div>
        </div>
        <a class="ui item">
          Logout
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuSecondaryMenu1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Secondary Menu',
    description: 'A menu can adjust its appearance to de-emphasize its contents',
    model: '    <div class="ui secondary  menu">\n' +
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
      '          <div class="ui icon input">\n' +
      '            <input type="text" placeholder="Search..."/>\n' +
      '            <i class="search link icon"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <a class="ui item">\n' +
      '          Logout\n' +
      '        </a>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
