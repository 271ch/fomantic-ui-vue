<template>
  <div>
      <div class="ui ignored info message">Since <div class="ui horizontal label">2.3</div> dimmers with content now only need a single wrapping <code>content</code> container.</div>
      <div class="ui segment">
        <h3 class="ui header">
          Overlayable Section
        </h3>
        <div class="ui small images">
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          <img class="ui wireframe image" src="/images/wireframe/image.png"/>
        </div>
        <img class="ui medium wireframe image" src="/images/wireframe/media-paragraph.png"/>
        <div class="ui dimmer">
          <div class="content">
            <h2 class="ui inverted icon header">
              <i class="heart icon"/>
              Dimmed Message!
            </h2>
          </div>
        </div>
      </div>
      <div class="ui ignored icon buttons">
        <div class="ui show button"><i class="plus icon"/></div>
        <div class="ui hide button"><i class="minus icon"/></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDimmerContentDimmer1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dimmer',
    title1: 'Types',
    title2: 'Content Dimmer',
    description: 'A dimmer can display content',
    model: '      <div class="ui ignored info message">Since <div class="ui horizontal label">2.3</div> dimmers with content now only need a single wrapping <code>content</code> container.</div>\n' +
      '      <div class="ui segment">\n' +
      '        <h3 class="ui header">\n' +
      '          Overlayable Section\n' +
      '        </h3>\n' +
      '        <div class="ui small images">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '        <img class="ui medium wireframe image" src="/images/wireframe/media-paragraph.png"/>\n' +
      '        <div class="ui dimmer">\n' +
      '          <div class="content">\n' +
      '            <h2 class="ui inverted icon header">\n' +
      '              <i class="heart icon"/>\n' +
      '              Dimmed Message!\n' +
      '            </h2>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui ignored icon buttons">\n' +
      '        <div class="ui show button"><i class="plus icon"/></div>\n' +
      '        <div class="ui hide button"><i class="minus icon"/></div>\n' +
      '      </div>\n',
  },
};
</script>
