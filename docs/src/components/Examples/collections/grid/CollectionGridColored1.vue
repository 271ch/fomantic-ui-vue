<template>
  <div>
    <FuiGrid equalWidth aligned=center padded>
      <FuiRow>
        <FuiColumn color=olive>
          Olive
        </FuiColumn>
        <FuiColumn color=black>
          Black
        </FuiColumn>
      </FuiRow>
      <FuiRow style="background-color: #869D05; color: #FFFFFF;">
        <FuiColumn>Custom Row</FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn color=black>
          Black
        </FuiColumn>
        <FuiColumn color=olive>
          Olive
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridColored1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Varying Grids',
    title2: 'Colored',
    description: '???',
    model: '      <div class="ui center aligned equal width padded grid">\n' +
      '        <div class="row">\n' +
      '          <div class="olive column">\n' +
      '            Olive\n' +
      '          </div>\n' +
      '          <div class="black column">\n' +
      '            Black\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row" style="background-color: rgb(134, 157, 5); color: rgb(255, 255, 255);">\n' +
      '          <div class="column">Custom Row</div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="black column">\n' +
      '            Black\n' +
      '          </div>\n' +
      '          <div class="olive column">\n' +
      '            Olive\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
