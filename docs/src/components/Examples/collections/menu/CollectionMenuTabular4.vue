<template>
  <div>
    <FuiGrid>
      <FuiColumn wide=four>
        <FuiMenu vertical fluid tabular>
          <FuiItem a active>
            Bio
          </FuiItem>
          <FuiItem a>
            Pics
          </FuiItem>
          <FuiItem a>
            Companies
          </FuiItem>
          <FuiItem a>
            Links
          </FuiItem>
        </FuiMenu>
      </FuiColumn>
      <FuiColumn wide=twelve stretched>
        <FuiSegment>
          This is an stretched grid column. This segment will always match the tab height
        </FuiSegment>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuTabular4',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Tabular',
    description: 'A menu can be formatted to show tabs of information',
    model: '    <div class="ui grid">\n' +
      '      <div class="four wide column">\n' +
      '        <div class="ui fluid vertical tabular menu">\n' +
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
