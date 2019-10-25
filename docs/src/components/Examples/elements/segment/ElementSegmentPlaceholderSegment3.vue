<template>
  <div>
    <FuiSegment placeholder>
      <FuiGrid column=two stackable aligned=center>
        <FuiDivider vertical>Or</FuiDivider>
        <FuiRow aligned=middle>
          <FuiColumn>
            <FuiHeader icon iconName=search>
              Find Country
            </FuiHeader>
            <FuiField>
              <div class="ui search">
                <FuiInput icon prompt placeholder="Search countries...">
                  <FuiIcon name=search></FuiIcon>
                </FuiInput>
                <div class="results"/>
              </div>
            </FuiField>
          </FuiColumn>
          <FuiColumn>
            <FuiHeader icon iconName=world>
              Add New Country
            </FuiHeader>
            <FuiButton tag=div primary>
              Create
            </FuiButton>
          </FuiColumn>
        </FuiRow>
      </FuiGrid>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentPlaceholderSegment3',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Types',
    title2: 'Placeholder Segment',
    description: 'A segment can be used to reserve space for conditionally displayed content.',
    model: '    <div class="ui placeholder segment">\n' +
      '      <div class="ui two column stackable center aligned grid">\n' +
      '        <div class="ui vertical divider">Or</div>\n' +
      '        <div class="middle aligned row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui icon header">\n' +
      '              <i class="search icon"></i>\n' +
      '              Find Country\n' +
      '            </div>\n' +
      '            <div class="field">\n' +
      '              <div class="ui search">\n' +
      '                <div class="ui icon input">\n' +
      '                  <input type="text" placeholder="Search countries..." class="prompt">\n' +
      '                  <i class="search icon"></i>\n' +
      '                </div>\n' +
      '                <div class="results"></div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui icon header">\n' +
      '              <i class="world icon"></i>\n' +
      '              Add New Country\n' +
      '            </div>\n' +
      '            <div class="ui primary button">\n' +
      '              Create\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
