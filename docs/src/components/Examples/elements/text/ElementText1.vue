<template>
  <div>
    <FuiSegment>
      This is <FuiText color=red>red</FuiText> inline text and this is <FuiText color=blue>blue</FuiText> inline text and this is <FuiText color=purple>purple</FuiText> inline text
    </FuiSegment>
    <FuiSegment inverted>
      This is <FuiText inverted color=red>red</FuiText> inline text and this is <FuiText inverted color=blue>blue</FuiText> inline text and this is <FuiText inverted color=purple>purple</FuiText> inline text
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementText1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'text',
    title1: '???',
    title2: '???',
    description: '???',
    model: '    <div class="ui segment">\n' +
      '            This is <span class="ui red text">red</span> inline text and this is <span class="ui blue text">blue</span> inline text and this is <span class="ui purple text">purple</span> inline text\n' +
      '          </div>\n' +
      '          <div class="ui inverted segment">\n' +
      '            This is <span class="ui inverted red text">red</span> inline text and this is <span class="ui inverted blue text">blue</span> inline text and this is <span class="ui inverted purple text">purple</span> inline text\n' +
      '          </div>',
  },
};
</script>
