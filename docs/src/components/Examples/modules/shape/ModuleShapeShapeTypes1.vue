<template>
  <div>
      <h3 class="ui header">Shape</h3>
      <div class="ui type buttons">
        <div class="active ui button" data-shape="auto">Auto</div>
        <div class="ui button" data-shape="square">Square</div>
        <div class="ui button" data-shape="irregular">Irregular</div>
      </div>
      <div class="ui divider"/>
      <div class="demo auto ui shape">
        <div class="sides">
          <div class="active first side">
            <img src="/images/leaves/1.png" class="ui medium image"/>
          </div>
          <div class="second side">
            <img src="/images/leaves/3.png" class="ui medium image"/>
          </div>
          <div class="third side">
            <img src="/images/leaves/5.png" class="ui medium image"/>
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
  name: 'ModuleShapeShapeTypes1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'shape',
    title1: 'Examples',
    title2: 'Shape Types',
    description: 'Shapes do not have to be regular or have its sides match up in length and width to animate correctly.',
    model: '      <h3 class="ui header">Shape</h3>\n' +
      '      <div class="ui type buttons">\n' +
      '        <div class="active ui button" data-shape="auto">Auto</div>\n' +
      '        <div class="ui button" data-shape="square">Square</div>\n' +
      '        <div class="ui button" data-shape="irregular">Irregular</div>\n' +
      '      </div>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="demo auto ui shape">\n' +
      '        <div class="sides">\n' +
      '          <div class="active first side">\n' +
      '            <img src="/images/leaves/1.png" class="ui medium image"/>\n' +
      '          </div>\n' +
      '          <div class="second side">\n' +
      '            <img src="/images/leaves/3.png" class="ui medium image"/>\n' +
      '          </div>\n' +
      '          <div class="third side">\n' +
      '            <img src="/images/leaves/5.png" class="ui medium image"/>\n' +
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
