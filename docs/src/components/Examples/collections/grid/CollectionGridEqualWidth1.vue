<template>
  <div>
    <FuiGrid equalWidth>
      <FuiColumn>
        <FuiSegment>
          1
        </FuiSegment>
      </FuiColumn>
      <FuiColumn wide=eight>
        <FuiSegment>
          2
        </FuiSegment>
      </FuiColumn>
      <FuiColumn>
        <FuiSegment>
          3
        </FuiSegment>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridEqualWidth1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Equal Width',
    description: 'A grid can automatically resize all elements to split the available width evenly',
    model: '      <div class="ui equal width grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            1\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="eight wide column">\n' +
      '          <div class="ui segment">\n' +
      '            2\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            3\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
