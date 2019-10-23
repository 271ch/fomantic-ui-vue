<template>
  <div>
    <FuiGrid column=two>
      <FuiColumn>
        <FuiImage tag=div fluid src="/images/wireframe/image.png">
          <FuiLabel color=black ribbon>
            <FuiIcon name=hotel></FuiIcon> Hotel
          </FuiLabel>
        </FuiImage>
      </FuiColumn>
      <FuiColumn>
        <FuiImage tag=div fluid src="/images/wireframe/image.png">
          <FuiLabel color=blue ribbon=right>
            <FuiIcon name=spoon></FuiIcon> Food
          </FuiLabel>
        </FuiImage>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelRibbon2',
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
      '          <div class="ui black ribbon label">\n' +
      '            <i class="hotel icon"></i> Hotel\n' +
      '          </div>\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid image">\n' +
      '          <div class="ui blue right ribbon label">\n' +
      '            <i class="spoon icon"></i> Food\n' +
      '          </div>\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
