<template>
  <div>
    <FuiGrid column=three divided>
      <FuiRow stretched>
        <FuiColumn>
          <FuiSegment>
            1
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            1
          </FuiSegment>
          <FuiSegment>
            2
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            1
          </FuiSegment>
          <FuiSegment>
            2
          </FuiSegment>
          <FuiSegment>
            3
          </FuiSegment>
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridStretched1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Stretched',
    description: 'A row can stretch its contents to take up the entire column height',
    model: '      <div class="ui three column divided grid">\n' +
      '        <div class="stretched row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              2\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              2\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              3\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
