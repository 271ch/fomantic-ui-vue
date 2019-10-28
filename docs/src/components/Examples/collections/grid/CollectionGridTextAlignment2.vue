<template>
  <div>
    <FuiGrid aligned=center>
      <FuiRow column=three>
        <FuiColumn>
          <FuiMenu vertical fluid>
            <FuiItem isHeader>
              Cats
            </FuiItem>
          </FuiMenu>
        </FuiColumn>
        <FuiColumn aligned=left>
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
      <FuiRow aligned=justified>
        <FuiColumn>
          <p>Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other.</p>
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridTextAlignment2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Text Alignment',
    description: 'A grid, row, or column can specify its text alignment',
    model: '      <div class="ui center aligned grid">\n' +
      '        <div class="three column row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui fluid vertical menu">\n' +
      '              <div class="header item">\n' +
      '                Cats\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="left aligned column">\n' +
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
      '        <div class="justified row">\n' +
      '          <div class="column">\n' +
      '            <p>Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other.</p>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
