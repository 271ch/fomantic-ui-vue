<template>
  <div>
      <div class="ui text message info ignore">
        See <a href="/elements/container.html">container documentation</a> for information on breakpoint calculations
      </div>
      <div class="ui grid">
        <div class="two column large screen only row">
          <div class="column">
            <div class="ui segment">
              Large Screen
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Large Screen
            </div>
          </div>
        </div>
        <div class="two column widescreen only row">
          <div class="column">
            <div class="ui segment">
              Widescreen
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Widescreen
            </div>
          </div>
        </div>
        <div class="two column mobile only row">
          <div class="column">
            <div class="ui segment">
              Mobile
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Mobile
            </div>
          </div>
        </div>
        <div class="three column row">
          <div class="computer only column">
            <div class="ui segment">
              Computer
            </div>
          </div>
          <div class="tablet mobile only column">
            <div class="ui segment">
              Tablet and Mobile
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              All Sizes
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              All Sizes
            </div>
          </div>
        </div>
        <div class="four column computer only row">
          <div class="column">
            <div class="ui segment">
              Computer
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Computer
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Computer
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Computer
            </div>
          </div>
        </div>
        <div class="three column tablet only row">
          <div class="column">
            <div class="ui segment">
              Tablet
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Tablet
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              Tablet
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridDeviceVisibility1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Device Visibility',
    description: 'A columns or row can appear only for a specific device, or screen sizes',
    model: '      <div class="ui text message info ignore">\n' +
      '        See <a href="/elements/container.html">container documentation</a> for information on breakpoint calculations\n' +
      '      </div>\n' +
      '      <div class="ui grid">\n' +
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
