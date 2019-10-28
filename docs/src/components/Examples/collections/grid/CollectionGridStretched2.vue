<template>
  <div>
    <FuiGrid equalWidth>
      <FuiRow stretched>
        <FuiColumn>
          <FuiSegment>
            1
          </FuiSegment>
          <FuiSegment>
            2
          </FuiSegment>
        </FuiColumn>
        <FuiColumn wide=six>
          <FuiSegment>
            <FuiImage src="/images/wireframe/image.png"></FuiImage>
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
      </FuiRow>
      <FuiRow>
        <FuiColumn>
          <FuiSegment>
            1
          </FuiSegment>
          <FuiSegment>
            2
          </FuiSegment>
        </FuiColumn>
        <FuiColumn wide=six>
          <FuiSegment>
            <FuiImage src="/images/wireframe/image.png"></FuiImage>
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
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridStretched2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Stretched',
    description: 'A row can stretch its contents to take up the entire column height',
    model: '      <div class="ui equal width grid">\n' +
      '        <div class="stretched row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              2\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="six wide column">\n' +
      '            <div class="ui segment">\n' +
      '              <img src="/images/wireframe/image.png" class="ui image">\n' +
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
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              1\n' +
      '            </div>\n' +
      '            <div class="ui segment">\n' +
      '              2\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="six wide column">\n' +
      '            <div class="ui segment">\n' +
      '              <img src="/images/wireframe/image.png" class="ui image">\n' +
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
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
