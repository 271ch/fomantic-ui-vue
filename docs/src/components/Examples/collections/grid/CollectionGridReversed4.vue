<template>
  <div>
    <FuiGrid display=mobile vertically reversed>
      <FuiRow>
        <FuiColumn>Mobile Row 4</FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>Mobile Row 3</FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>Mobile Row 2</FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>Mobile Row 1</FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridReversed4',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Reversed',
    description: 'A grid or row can specify that its columns should reverse order at different device sizes',
    model: '      <div class="ui mobile vertically reversed grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">Mobile Row 4</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Mobile Row 3</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Mobile Row 2</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Mobile Row 1</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
