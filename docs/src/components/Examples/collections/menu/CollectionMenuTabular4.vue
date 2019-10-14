<template>
  <div>
    <div class="ui grid">
      <div class="four wide column">
        <div class="ui vertical fluid tabular menu">
          <a class="active item">
            Bio
          </a>
          <a class="item">
            Pics
          </a>
          <a class="item">
            Companies
          </a>
          <a class="item">
            Links
          </a>
        </div>
      </div>
      <div class="twelve wide stretched column">
        <div class="ui segment">
          This is an stretched grid column. This segment will always match the tab height
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuTabular4',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Tabular',
    description: 'A menu can be formatted to show tabs of information',
    model: '    <div class="ui grid">\n' +
      '      <div class="four wide column">\n' +
      '        <div class="ui vertical fluid tabular menu">\n' +
      '          <a class="active item">\n' +
      '            Bio\n' +
      '          </a>\n' +
      '          <a class="item">\n' +
      '            Pics\n' +
      '          </a>\n' +
      '          <a class="item">\n' +
      '            Companies\n' +
      '          </a>\n' +
      '          <a class="item">\n' +
      '            Links\n' +
      '          </a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="twelve wide stretched column">\n' +
      '        <div class="ui segment">\n' +
      '          This is an stretched grid column. This segment will always match the tab height\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
