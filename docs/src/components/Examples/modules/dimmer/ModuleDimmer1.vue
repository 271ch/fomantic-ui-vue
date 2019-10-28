<template>
  <div>
      <div class="ignored ui info message">Works also very well with transitions <code>fade up</code> or <code>fade down</code></div>
      <div class="evaluated code">
      $('.partially.example .dimmer')
        .dimmer({
            transition: 'fade up',
            on: 'hover'
        })
      ;
      </div>
      <div class="ui medium image">
        <div class="ui bottom dimmer">
          <div class="content">
            <h3>Look!</h3>
                ui bottom dimmer
          </div>
        </div>
        <img class="ui image" src="/images/wireframe/image.png"/>
      </div>
      <div class="ui medium image">
        <div class="ui center dimmer">
          <div class="content">
            <h3>Look!</h3>
                ui center dimmer
          </div>
        </div>
        <img class="ui image" src="/images/wireframe/image.png"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDimmer1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dimmer',
    title1: 'States',
    title2: '???',
    description: '???',
    model: '      <div class="ignored ui info message">Works also very well with transitions <code>fade up</code> or <code>fade down</code></div>\n' +
      '      <div class="evaluated code">\n' +
      '      $(\'.partially.example .dimmer\')\n' +
      '        .dimmer({\n' +
      '            transition: \'fade up\',\n' +
      '            on: \'hover\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui medium image">\n' +
      '        <div class="ui bottom dimmer">\n' +
      '          <div class="content">\n' +
      '            <h3>Look!</h3>\n' +
      '                ui bottom dimmer\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <img class="ui image" src="/images/wireframe/image.png"/>\n' +
      '      </div>\n' +
      '      <div class="ui medium image">\n' +
      '        <div class="ui center dimmer">\n' +
      '          <div class="content">\n' +
      '            <h3>Look!</h3>\n' +
      '                ui center dimmer\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <img class="ui image" src="/images/wireframe/image.png"/>\n' +
      '      </div>\n',
  },
};
</script>
