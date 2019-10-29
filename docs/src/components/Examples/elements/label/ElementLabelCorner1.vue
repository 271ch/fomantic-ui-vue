<template>
  <div>
    <FuiGrid column=two>
      <FuiColumn>
        <FuiImage tag=div fluid src="/images/wireframe/image.png">
          <FuiLabel tag=a corner=left>
            <FuiIcon name=heart></FuiIcon>
          </FuiLabel>
        </FuiImage>
      </FuiColumn>
      <FuiColumn>
        <FuiImage tag=div fluid src="/images/wireframe/image.png">
          <FuiLabel tag=a corner=right color=red>
            <FuiIcon name=save></FuiIcon>
          </FuiLabel>
        </FuiImage>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelCorner1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Corner',
    description: 'A label can position itself in the corner of an element',
    model: '    <div class="ui two column grid">\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid image">\n' +
      '          <a class="ui left corner label">\n' +
      '            <i class="heart icon"></i>\n' +
      '          </a>\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid image">\n' +
      '          <a class="ui red right corner label">\n' +
      '            <i class="save icon"></i>\n' +
      '          </a>\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
