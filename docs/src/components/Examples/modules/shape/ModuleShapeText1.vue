<template>
  <div>
      <div class="ui info ignored icon message">
        <i class="info letter icon"/>
        <div class="content">
          <div class="header">Using Shapes</div>
          <ul class="list">
            <li>A shape must have defined width and heights for each side or else text flow may change during animation</li>
            <li>The module uses 3D transformations which are currently only supported in modern versions of Chrome, Safari, and Firefox.</li>
          </ul>
        </div>
      </div>
      <div class="ui text shape">
        <div class="sides">
          <div class="active ui header side">Did you know? This side starts visible.</div>
          <div class="ui header side">Help, its another side!</div>
          <div class="ui header side">This is the last side</div>
        </div>
      </div>
      <div class="ui ignored divider"/>
      <div class="ui ignored icon direction buttons">
        <div class="ui button" data-animation="flip" title="Flip Left" data-direction="left"><i class="left long arrow icon"/></div>
        <div class="ui button" data-animation="flip" title="Flip Up" data-direction="up"><i class="up long arrow icon"/></div>
        <div class="ui icon button" data-animation="flip" title="Flip Down" data-direction="down"><i class="down long arrow icon"/></div>
        <div class="ui icon button" data-animation="flip" title="Flip Right" data-direction="right"><i class="right long arrow icon"/></div>
      </div>
      <div class="ui ignored icon direction buttons">
        <div class="ui button" title="Flip Over" data-animation="flip" data-direction="over"><i class="retweet icon"/></div>
        <div class="ui button" title="Flip Back" data-animation="flip" data-direction="back"><i class="flipped retweet icon"/></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleShapeText1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'shape',
    title1: 'Types',
    title2: 'Text',
    description: 'A text shape is formatted to allow for sides of text to be displayed',
    model: '      <div class="ui info ignored icon message">\n' +
      '        <i class="info letter icon"/>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Using Shapes</div>\n' +
      '          <ul class="list">\n' +
      '            <li>A shape must have defined width and heights for each side or else text flow may change during animation</li>\n' +
      '            <li>The module uses 3D transformations which are currently only supported in modern versions of Chrome, Safari, and Firefox.</li>\n' +
      '          </ul>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui text shape">\n' +
      '        <div class="sides">\n' +
      '          <div class="active ui header side">Did you know? This side starts visible.</div>\n' +
      '          <div class="ui header side">Help, its another side!</div>\n' +
      '          <div class="ui header side">This is the last side</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui ignored divider"/>\n' +
      '      <div class="ui ignored icon direction buttons">\n' +
      '        <div class="ui button" data-animation="flip" title="Flip Left" data-direction="left"><i class="left long arrow icon"/></div>\n' +
      '        <div class="ui button" data-animation="flip" title="Flip Up" data-direction="up"><i class="up long arrow icon"/></div>\n' +
      '        <div class="ui icon button" data-animation="flip" title="Flip Down" data-direction="down"><i class="down long arrow icon"/></div>\n' +
      '        <div class="ui icon button" data-animation="flip" title="Flip Right" data-direction="right"><i class="right long arrow icon"/></div>\n' +
      '      </div>\n' +
      '      <div class="ui ignored icon direction buttons">\n' +
      '        <div class="ui button" title="Flip Over" data-animation="flip" data-direction="over"><i class="retweet icon"/></div>\n' +
      '        <div class="ui button" title="Flip Back" data-animation="flip" data-direction="back"><i class="flipped retweet icon"/></div>\n' +
      '      </div>\n',
  },
};
</script>
