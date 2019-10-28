<template>
  <div>
      <div class="code" data-type="javascript">
      $('.ui.sticky')
        .sticky({
          context: '#example2',
          pushing: true
        })
      ;
      </div>
      <div class="ui segment" id="example2">
        <div class="left ui rail">
          <div class="ui sticky">
            <h3 class="ui header">Stuck Content</h3>
            <img class="ui wireframe image" src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="right ui rail">
          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>
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
  name: 'ModuleStickyPushing1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sticky',
    title1: 'Examples',
    title2: 'Pushing',
    description: 'Specifying',
    model: '      <div class="code" data-type="javascript">\n' +
      '      $(\'.ui.sticky\')\n' +
      '        .sticky({\n' +
      '          context: \'#example2\',\n' +
      '          pushing: true\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui segment" id="example2">\n' +
      '        <div class="left ui rail">\n' +
      '          <div class="ui sticky">\n' +
      '            <h3 class="ui header">Stuck Content</h3>\n' +
      '            <img class="ui wireframe image" src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="right ui rail">\n' +
      '          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
      '          <img class="ui wireframe paragraph image" src="/images/wireframe/paragraph.png"/>\n' +
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
