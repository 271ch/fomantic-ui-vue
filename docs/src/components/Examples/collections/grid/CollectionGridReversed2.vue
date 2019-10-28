<template>
  <div>
    <FuiGrid display=computer vertically reversed>
      <FuiRow>
        <FuiColumn>Computer Row 4</FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>Computer Row 3</FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>Computer Row 2</FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>Computer Row 1</FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridReversed2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Reversed',
    description: 'A grid or row can specify that its columns should reverse order at different device sizes',
    model: '      <div class="ui computer vertically reversed grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">Computer Row 4</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Computer Row 3</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Computer Row 2</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Computer Row 1</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
