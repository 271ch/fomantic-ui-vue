<template>
  <div>
    <FuiSegment>
      <p>Starting with <FuiText size=mini color=red>mini</FuiText> text</p>
      <p>which turns into <FuiText size=tiny color=red>tiny</FuiText> text</p>
      <p>changing to <FuiText size=small color=red>small</FuiText> text until it is</p>
      <p>the default <FuiText size=medium color=red>medium</FuiText> text</p>
      <p>and could be <FuiText size=large color=red>large</FuiText> text</p>
      <p>to turn into <FuiText size=big color=red>big</FuiText> text</p>
      <p>then growing to <FuiText size=huge color=red>huge</FuiText> text</p>
      <p>to finally become <FuiText size=massive color=red>massive</FuiText> text</p>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementText2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'text',
    title1: '???',
    title2: '???',
    description: '???',
    model: '    <div class="ui segment">\n' +
      '          <p>Starting with <span class="ui mini red text">mini</span> text</p>\n' +
      '          <p>which turns into <span class="ui tiny red text">tiny</span> text</p>\n' +
      '          <p>changing to <span class="ui small red text">small</span> text until it is</p>\n' +
      '          <p>the default <span class="ui medium red text">medium</span> text</p>\n' +
      '          <p>and could be <span class="ui large red text">large</span> text</p>\n' +
      '          <p>to turn into <span class="ui big red text">big</span> text</p>\n' +
      '          <p>then growing to <span class="ui huge red text">huge</span> text</p>\n' +
      '          <p>to finally become <span class="ui massive red text">massive</span> text</p>\n' +
      '        </div>',
  },
};
</script>
