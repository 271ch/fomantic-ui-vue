<template>
  <div>
    <FuiGrid aligned=center column=three>
      <FuiRow>
        <FuiColumn>
          <FuiMenu vertical fluid>
            <FuiItem isHeader>
              Cats
            </FuiItem>
          </FuiMenu>
        </FuiColumn>
        <FuiColumn>
          <FuiMenu vertical fluid>
            <FuiItem isHeader>
              Dogs
            </FuiItem>
            <FuiItem>
              Poodle
            </FuiItem>
            <FuiItem>
              Cockerspaniel
            </FuiItem>
          </FuiMenu>
        </FuiColumn>
        <FuiColumn>
          <FuiMenu vertical fluid>
            <FuiItem isHeader>
              Monkeys
            </FuiItem>
          </FuiMenu>
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridTextAlignment1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Text Alignment',
    description: 'A grid, row, or column can specify its text alignment',
    model: '      <div class="ui three column center aligned grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui fluid vertical menu">\n' +
      '              <div class="header item">\n' +
      '                Cats\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui fluid vertical menu">\n' +
      '              <div class="header item">\n' +
      '                Dogs\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                Poodle\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                Cockerspaniel\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui fluid vertical menu">\n' +
      '              <div class="header item">\n' +
      '                Monkeys\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
