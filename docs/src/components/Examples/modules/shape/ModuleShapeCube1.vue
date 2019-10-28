<template>
  <div>
      <div class="ui cube shape">
        <div class="sides">
          <div class="active side">
            <div class="content">
              <div class="center">
                1
              </div>
            </div>
          </div>
          <div class="side">
            <div class="content">
              <div class="center">
                2
              </div>
            </div>
          </div>
          <div class="side">
            <div class="content">
              <div class="center">
                3
              </div>
            </div>
          </div>
          <div class="side">
            <div class="content">
              <div class="center">
                4
              </div>
            </div>
          </div>
          <div class="side">
            <div class="content">
              <div class="center">
                5
              </div>
            </div>
          </div>
          <div class="side">
            <div class="content">
              <div class="center">
                6
              </div>
            </div>
          </div>
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
  name: 'ModuleShapeCube1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'shape',
    title1: 'Types',
    title2: 'Cube',
    description: 'A cube shape is formatted so that each side is the face of a cube',
    model: '      <div class="ui cube shape">\n' +
      '        <div class="sides">\n' +
      '          <div class="active side">\n' +
      '            <div class="content">\n' +
      '              <div class="center">\n' +
      '                1\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="side">\n' +
      '            <div class="content">\n' +
      '              <div class="center">\n' +
      '                2\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="side">\n' +
      '            <div class="content">\n' +
      '              <div class="center">\n' +
      '                3\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="side">\n' +
      '            <div class="content">\n' +
      '              <div class="center">\n' +
      '                4\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="side">\n' +
      '            <div class="content">\n' +
      '              <div class="center">\n' +
      '                5\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="side">\n' +
      '            <div class="content">\n' +
      '              <div class="center">\n' +
      '                6\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
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
