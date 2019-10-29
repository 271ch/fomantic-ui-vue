<template>
  <div>
    <FuiGrid column=three>
      <FuiRow>
        <FuiColumn>
          <FuiSegment>
            <FuiLabel attached=top>HTML</FuiLabel>
            <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            <FuiLabel attached=bottom>CSS</FuiLabel>
            <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            <FuiLabel attached="top right">Code</FuiLabel>
            <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
          </FuiSegment>
        </FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>
          <FuiSegment>
            <FuiLabel attached="top left">View</FuiLabel>
            <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            <FuiLabel attached="bottom left">User View</FuiLabel>
            <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            <FuiLabel attached="bottom right">Admin View</FuiLabel>
            <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
          </FuiSegment>
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
    <div class="existing code">
      <FuiLabel attached=top>HTML</FuiLabel>
      <FuiLabel attached=bottom>CSS</FuiLabel>
      <FuiLabel attached="top right">Code</FuiLabel>
      <FuiLabel attached="top left">View</FuiLabel>
      <FuiLabel attached="bottom left">User View</FuiLabel>
      <FuiLabel attached="bottom right">Admin View</FuiLabel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelAttached1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Attached',
    description: 'A label can attach to a content segment',
    model: '    <div class="ui three column grid">\n' +
      '      <div class="row">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui top attached label">HTML</div>\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui bottom attached label">CSS</div>\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui top right attached label">Code</div>\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="row">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui top left attached label">View</div>\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui bottom left attached label">User View</div>\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <div class="ui bottom right attached label">Admin View</div>\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '      <div class="existing code">\n' +
      '    <div class="ui top attached label">HTML</div>\n' +
      '    <div class="ui bottom attached label">CSS</div>\n' +
      '    <div class="ui top right attached label">Code</div>\n' +
      '    <div class="ui top left attached label">View</div>\n' +
      '    <div class="ui bottom left attached label">User View</div>\n' +
      '    <div class="ui bottom right attached label">Admin View</div>\n' +
      '      </div>\n',
  },
};
</script>
