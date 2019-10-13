<template>
  <div>
    <div class="ui two top attached buttons">
        <div class="ui button">One</div>
        <div class="ui button">Two</div>
    </div>
    <div class="ui attached segment">
      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>
    </div>
    <div class="ui two bottom attached buttons">
        <div class="ui button">One</div>
        <div class="ui button">Two</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonVerticallyAttached2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Variations',
      title2: 'Vertically Attached',
      description: 'A button can be attached to the top or bottom of other content',
      model: '    <div class="ui two top attached buttons">\n' +
      '        <div class="ui button">One</div>\n' +
      '        <div class="ui button">Two</div>\n' +
      '    </div>\n' +
      '    <div class="ui attached segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '    </div>\n' +
      '    <div class="ui two bottom attached buttons">\n' +
      '        <div class="ui button">One</div>\n' +
      '        <div class="ui button">Two</div>\n' +
      '    </div>\n',
    };
  },
};
</script>
