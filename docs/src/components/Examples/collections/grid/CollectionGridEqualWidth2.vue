<template>
  <div>
    <FuiGrid equalWidth>
      <FuiRow>
        <FuiColumn>
          <FuiSegment>1</FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>2</FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>3</FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>4</FuiSegment>
        </FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>
          <FuiSegment>1</FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>2</FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>3</FuiSegment>
        </FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>
          <FuiSegment>1</FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>2</FuiSegment>
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridEqualWidth2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Equal Width',
    description: 'A grid can automatically resize all elements to split the available width evenly',
    model: '      <div class="ui equal width grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">1</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">2</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">3</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">4</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">1</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">2</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">3</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">1</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">2</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
