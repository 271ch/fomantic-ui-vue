<template>
  <div>
      <div class="code" data-type="javascript">
      $('.ui.sticky')
        .sticky({
          context: '#example1'
        })
      ;
      </div>
      <div class="ui segment" id="example1">
        <div class="left ui rail">
          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
          <div class="ui sticky">
            <h3 class="ui header">Stuck Content</h3>
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="right ui rail">
          <div class="ui sticky">
            <h3 class="ui header">Stuck Content</h3>
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleStickyStickingtoAdjacentContext1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sticky',
    title1: 'Examples',
    title2: 'Sticking to Adjacent Context',
    description: 'Sticky content attaches itself to the viewport when it is passed, and remains fixed to the viewport until this fixed content collides with the bottom edge of the passed',
    model: '      <div class="code" data-type="javascript">\n' +
      '      $(\'.ui.sticky\')\n' +
      '        .sticky({\n' +
      '          context: \'#example1\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui segment" id="example1">\n' +
      '        <div class="left ui rail">\n' +
      '          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '          <div class="ui sticky">\n' +
      '            <h3 class="ui header">Stuck Content</h3>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="right ui rail">\n' +
      '          <div class="ui sticky">\n' +
      '            <h3 class="ui header">Stuck Content</h3>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '      </div>\n',
  },
};
</script>
