<template>
  <div>
    <div class="ui placeholder segment">
      <div class="ui two column stackable center aligned grid">
        <div class="ui vertical divider">Or</div>
        <div class="middle aligned row">
          <div class="column">
            <div class="ui icon header">
              <i class="search icon"/>
              Find Country
            </div>
            <div class="field">
              <div class="ui search">
                <div class="ui icon input">
                  <input class="prompt" type="text" placeholder="Search countries..."/>
                  <i class="search icon"/>
                </div>
                <div class="results"/>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui icon header">
              <i class="world icon"/>
              Add New Country
            </div>
            <div class="ui primary button">
              Create
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentPlaceholderSegment3',
  data: function () {
    return {
      converted: false,
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
      '              <i class="search icon"/>\n' +
      '              Find Country\n' +
      '            </div>\n' +
      '            <div class="field">\n' +
      '              <div class="ui search">\n' +
      '                <div class="ui icon input">\n' +
      '                  <input class="prompt" type="text" placeholder="Search countries..."/>\n' +
      '                  <i class="search icon"/>\n' +
      '                </div>\n' +
      '                <div class="results"/>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui icon header">\n' +
      '              <i class="world icon"/>\n' +
      '              Add New Country\n' +
      '            </div>\n' +
      '            <div class="ui primary button">\n' +
      '              Create\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
