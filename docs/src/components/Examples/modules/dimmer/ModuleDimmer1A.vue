<template>
  <div>
      <div class="ui black label">New in 2.7.0</div>
      <div class="evaluated code">
          $('.dimmerloader.example .image')
          .dimmer({
              displayLoader: true,
              loaderVariation: 'slow orange medium elastic',
              loaderText: 'Wait a second, please...'
          })
          .dimmer('show')
          ;
      </div>
      <div class="ui medium image">
          <img class="ui image" src="/images/wireframe/image.png"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDimmer1A',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dimmer',
    title1: 'Examples',
    title2: '???',
    description: 'You can customize a loader in a dimmer via javascript',
    model: '      <div class="ui black label">New in 2.7.0</div>\n' +
      '      <div class="evaluated code">\n' +
      '          $(\'.dimmerloader.example .image\')\n' +
      '          .dimmer({\n' +
      '              displayLoader: true,\n' +
      '              loaderVariation: \'slow orange medium elastic\',\n' +
      '              loaderText: \'Wait a second, please...\'\n' +
      '          })\n' +
      '          .dimmer(\'show\')\n' +
      '          ;\n' +
      '      </div>\n' +
      '      <div class="ui medium image">\n' +
      '          <img class="ui image" src="/images/wireframe/image.png"/>\n' +
      '      </div>\n',
  },
};
</script>
