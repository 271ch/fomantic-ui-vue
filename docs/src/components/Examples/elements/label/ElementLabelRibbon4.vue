<template>
  <div>
    <FuiGrid column=two>
      <FuiColumn>
        <FuiImage tag=div fluid src="/images/wireframe/image.png">
          <FuiLabel color=black ribbon icon>
            <FuiIcon name=hotel></FuiIcon>
          </FuiLabel>
        </FuiImage>
      </FuiColumn>
      <FuiColumn>
        <FuiImage tag=div fluid src="/images/wireframe/image.png">
          <FuiLabel color=blue ribbon=right icon>
            <FuiIcon name=spoon></FuiIcon>
          </FuiLabel>
        </FuiImage>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelRibbon4',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Ribbon',
    description: 'A label can appear as a ribbon attaching itself to an element.',
    model: '    <div class="ui two column grid">\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid image">\n' +
      '          <div class="ui black icon ribbon label">\n' +
      '            <i class="hotel icon"></i> \n' +
      '          </div>\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid image">\n' +
      '          <div class="ui blue icon right ribbon label">\n' +
      '            <i class="spoon icon"></i>\n' +
      '          </div>\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
