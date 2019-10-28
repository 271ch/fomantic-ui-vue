<template>
  <div>
      <div class="evaluated code">
      $('.event.example .image')
        .dimmer({
          on: 'hover'
        })
      ;
      </div>
      <div class="ui medium image">
        <div class="ui dimmer">
          <div class="content">
            <h2 class="ui inverted header">Title</h2>
            <div class="ui primary button">Add</div>
            <div class="ui button">View</div>
          </div>
        </div>
        <img class="ui image" src="/images/wireframe/image.png"/>
      </div>
      <div class="ui circular image">
        <div class="ui dimmer">
          <div class="content">
            <div class="ui small primary button">Add</div>
            <div class="ui small button">View</div>
          </div>
        </div>
        <img src="/images/wireframe/square-image.png"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDimmerDimmerEvents1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dimmer',
    title1: 'Examples',
    title2: 'Dimmer Events',
    description: 'A dimmer can trigger a visibility change on an event',
    model: '      <div class="evaluated code">\n' +
      '      $(\'.event.example .image\')\n' +
      '        .dimmer({\n' +
      '          on: \'hover\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui medium image">\n' +
      '        <div class="ui dimmer">\n' +
      '          <div class="content">\n' +
      '            <h2 class="ui inverted header">Title</h2>\n' +
      '            <div class="ui primary button">Add</div>\n' +
      '            <div class="ui button">View</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <img class="ui image" src="/images/wireframe/image.png"/>\n' +
      '      </div>\n' +
      '      <div class="ui circular image">\n' +
      '        <div class="ui dimmer">\n' +
      '          <div class="content">\n' +
      '            <div class="ui small primary button">Add</div>\n' +
      '            <div class="ui small button">View</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <img src="/images/wireframe/square-image.png"/>\n' +
      '      </div>\n',
  },
};
</script>
