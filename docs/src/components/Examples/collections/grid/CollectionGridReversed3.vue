<template>
  <div>
    <FuiGrid display=tablet vertically reversed>
      <FuiRow>
        <FuiColumn>Tablet Row 4</FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>Tablet Row 3</FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>Tablet Row 2</FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>Tablet Row 1</FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridReversed3',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Reversed',
    description: 'A grid or row can specify that its columns should reverse order at different device sizes',
    model: '      <div class="ui tablet vertically reversed grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">Tablet Row 4</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Tablet Row 3</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Tablet Row 2</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">Tablet Row 1</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
