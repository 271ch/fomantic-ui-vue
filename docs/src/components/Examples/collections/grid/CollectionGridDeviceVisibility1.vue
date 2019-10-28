<template>
  <div>
    <FuiGrid>
      <FuiRow column=two only="large screen">
        <FuiColumn>
          <FuiSegment>
            Large Screen
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            Large Screen
          </FuiSegment>
        </FuiColumn>
      </FuiRow>
      <FuiRow column=two only=widescreen>
        <FuiColumn>
          <FuiSegment>
            Widescreen
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            Widescreen
          </FuiSegment>
        </FuiColumn>
      </FuiRow>
      <FuiRow column=two only=mobile>
        <FuiColumn>
          <FuiSegment>
            Mobile
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            Mobile
          </FuiSegment>
        </FuiColumn>
      </FuiRow>
      <FuiRow column=three>
        <FuiColumn only=computer>
          <FuiSegment>
            Computer
          </FuiSegment>
        </FuiColumn>
        <FuiColumn :only="['tablet','mobile']">
          <FuiSegment>
            Tablet and Mobile
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            All Sizes
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            All Sizes
          </FuiSegment>
        </FuiColumn>
      </FuiRow>
      <FuiRow column=four only=computer>
        <FuiColumn>
          <FuiSegment>
            Computer
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            Computer
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            Computer
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            Computer
          </FuiSegment>
        </FuiColumn>
      </FuiRow>
      <FuiRow column=three only=tablet>
        <FuiColumn>
          <FuiSegment>
            Tablet
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            Tablet
          </FuiSegment>
        </FuiColumn>
        <FuiColumn>
          <FuiSegment>
            Tablet
          </FuiSegment>
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridDeviceVisibility1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Device Visibility',
    description: 'A columns or row can appear only for a specific device, or screen sizes',
    model: '      <div class="ui grid">\n' +
      '        <div class="two column large screen only row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Large Screen\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Large Screen\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="two column widescreen only row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Widescreen\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Widescreen\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="two column mobile only row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Mobile\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Mobile\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="three column row">\n' +
      '          <div class="computer only column">\n' +
      '            <div class="ui segment">\n' +
      '              Computer\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="tablet mobile only column">\n' +
      '            <div class="ui segment">\n' +
      '              Tablet and Mobile\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              All Sizes\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              All Sizes\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="four column computer only row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Computer\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Computer\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Computer\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Computer\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="three column tablet only row">\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Tablet\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Tablet\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui segment">\n' +
      '              Tablet\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
