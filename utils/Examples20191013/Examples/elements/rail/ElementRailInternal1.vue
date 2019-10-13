<template>
  <div>
    <div class="ui segment" style="left: -150px; width: 960px;min-height: 300px;">
      <div class="ui left internal rail">
        <div class="ui segment">
          Left Rail Content
        </div>
      </div>
      <div class="ui right internal rail">
        <div class="ui segment">
          Right Rail Content
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRailInternal1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'rail',
      title1: 'Types',
      title2: 'Internal',
      description: 'A rail can attach itself to the inside of a container',
      model: '    <div class="ui segment" style="left: -150px; width: 960px;min-height: 300px;">\n' +
      '      <div class="ui left internal rail">\n' +
      '        <div class="ui segment">\n' +
      '          Left Rail Content\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui right internal rail">\n' +
      '        <div class="ui segment">\n' +
      '          Right Rail Content\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
