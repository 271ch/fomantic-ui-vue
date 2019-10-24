<template>
  <div>
    <div class="ui segment">
      <div class="ui left attached rail">
        <div class="ui segment">
          Left Rail Content
        </div>
      </div>
      <div class="ui right attached rail">
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
  name: 'ElementRailAttached1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'rail',
    title1: 'Variations',
    title2: 'Attached',
    description: 'A rail can appear attached to the main viewport',
    model: '    <div class="ui segment">\n' +
      '      <div class="ui left attached rail">\n' +
      '        <div class="ui segment">\n' +
      '          Left Rail Content\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui right attached rail">\n' +
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
