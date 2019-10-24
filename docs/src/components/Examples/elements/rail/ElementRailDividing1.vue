<template>
  <div>
    <div class="ui segment">
      <div class="ui left dividing rail">
        <div class="ui segment">
          Left Rail Content
        </div>
      </div>
      <div class="ui right dividing rail">
        <div class="ui segment">
          Right Rail Content
        </div>
      </div>
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRailDividing1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'rail',
    title1: 'Types',
    title2: 'Dividing',
    description: 'A rail can create a division between itself and a container',
    model: '    <div class="ui segment">\n' +
      '      <div class="ui left dividing rail">\n' +
      '        <div class="ui segment">\n' +
      '          Left Rail Content\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui right dividing rail">\n' +
      '        <div class="ui segment">\n' +
      '          Right Rail Content\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
