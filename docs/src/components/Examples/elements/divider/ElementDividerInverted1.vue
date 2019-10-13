<template>
  <div>
    <div class="ui inverted segment">
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
      <div class="ui inverted divider"/>
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
      <h4 class="ui horizontal inverted divider">
        Horizontal
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerInverted1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'divider',
      title1: 'Variations',
      title2: 'Inverted',
      description: 'A divider can have its colors inverted',
      model: '    <div class="ui inverted segment">\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      <div class="ui inverted divider"/>\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      <h4 class="ui horizontal inverted divider">\n' +
      '        Horizontal\n' +
      '      </h4>\n' +
      '    </div>\n',
    };
  },
};
</script>
