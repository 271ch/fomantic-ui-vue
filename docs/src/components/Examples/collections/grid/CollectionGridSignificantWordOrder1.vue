<template>
  <div>
    <FuiGrid aligned=right>
      <FuiColumn floated=left aligned=right wide=six>
        <FuiSegment>
          Left floated right aligned column
        </FuiSegment>
      </FuiColumn>
      <FuiColumn floated=right aligned=left wide=six>
        <FuiSegment>
          Right floated left aligned column
        </FuiSegment>
      </FuiColumn>
      <FuiRow aligned=center column=two>
        <FuiColumn>
          <FuiSegment>
          Center aligned row
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
          Center aligned row
          </FuiSegment>
        </FuiColumn>
      </FuiRow>
      <FuiColumn wide=sixteen>
        <FuiSegment>
          Right Aligned Grid
        </FuiSegment>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridSignificantWordOrder1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Varying Grids',
    title2: 'Significant Word Order',
    description: '???',
    model: '      <div class="ui right aligned grid">\n' +
      '        <div class="six wide left floated right aligned column">\n' +
      '          <div class="ui segment">\n' +
      '            Left floated right aligned column\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="six wide right floated left aligned column">\n' +
      '          <div class="ui segment">\n' +
      '            Right floated left aligned column\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="center aligned two column row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '            Center aligned row\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '            Center aligned row\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="sixteen wide column">\n' +
      '          <div class="ui segment">\n' +
      '            Right Aligned Grid\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
