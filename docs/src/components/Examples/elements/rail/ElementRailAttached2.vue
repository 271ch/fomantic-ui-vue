<template>
  <div>
    <div class="ui segment" style="left: -150px; width: 960px;min-height: 300px;">
      <div class="ui left internal attached rail">
        <div class="ui segment">
          Left Rail Content
        </div>
      </div>
      <div class="ui right internal attached rail">
        <div class="ui segment">
          Right Rail Content
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRailAttached2',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'rail',
    title1: 'Variations',
    title2: 'Attached',
    description: 'A rail can appear attached to the main viewport',
    model: '    <div class="ui segment" style="left: -150px; width: 960px;min-height: 300px;">\n' +
      '      <div class="ui left internal attached rail">\n' +
      '        <div class="ui segment">\n' +
      '          Left Rail Content\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui right internal attached rail">\n' +
      '        <div class="ui segment">\n' +
      '          Right Rail Content\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
