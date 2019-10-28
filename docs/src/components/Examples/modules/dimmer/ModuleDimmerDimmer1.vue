<template>
  <div>
      <div class="code">
        // left button
        $('.segment').dimmer('show');
        // right button
        $('.segment').dimmer('hide');
      </div>
      <div class="ui ignored info message">A dimmer will automatically be created when a dimming behavior is triggered on an element.
      </div>
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
      </div>
      <div class="ui existing code">
        <div class="ui segment">
          <!-- Dimmer Generated Automatically No Need to Include !-->
          <h3 class="ui header">
            Overlayable Section
          </h3>
          <div class="ui small images">
            <img/>
            <img/>
            <img/>
          </div>
          <p/>
        </div>
      </div>
      <div class="ui ignored ignored icon buttons">
        <div class="ui show button"><i class="plus icon"/></div>
        <div class="ui hide button"><i class="minus icon"/></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDimmerDimmer1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dimmer',
    title1: 'Types',
    title2: 'Dimmer',
    description: 'A simple dimmer displays no content',
    model: '      <div class="code">\n' +
      '        // left button\n' +
      '        $(\'.segment\').dimmer(\'show\');\n' +
      '        // right button\n' +
      '        $(\'.segment\').dimmer(\'hide\');\n' +
      '      </div>\n' +
      '      <div class="ui ignored info message">A dimmer will automatically be created when a dimming behavior is triggered on an element.\n' +
      '      </div>\n' +
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
      '      </div>\n' +
      '      <div class="ui existing code">\n' +
      '        <div class="ui segment">\n' +
      '          <!-- Dimmer Generated Automatically No Need to Include !-->\n' +
      '          <h3 class="ui header">\n' +
      '            Overlayable Section\n' +
      '          </h3>\n' +
      '          <div class="ui small images">\n' +
      '            <img/>\n' +
      '            <img/>\n' +
      '            <img/>\n' +
      '          </div>\n' +
      '          <p/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui ignored ignored icon buttons">\n' +
      '        <div class="ui show button"><i class="plus icon"/></div>\n' +
      '        <div class="ui hide button"><i class="minus icon"/></div>\n' +
      '      </div>\n',
  },
};
</script>
