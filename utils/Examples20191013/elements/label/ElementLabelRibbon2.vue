<template>
  <div>
    <div class="ui two column grid">
      <div class="column">
        <div class="ui fluid image">
          <div class="ui black ribbon label">
            <i class="hotel icon"/> Hotel
          </div>
          <img src="/images/wireframe/image.png"/>
        </div>
      </div>
      <div class="column">
        <div class="ui fluid image">
          <div class="ui blue right ribbon label">
            <i class="spoon icon"/> Food
          </div>
          <img src="/images/wireframe/image.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelRibbon2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Types',
      title2: 'Ribbon',
      description: 'A label can appear as a ribbon attaching itself to an element.',
      model: '    <div class="ui two column grid">\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid image">\n' +
      '          <div class="ui black ribbon label">\n' +
      '            <i class="hotel icon"/> Hotel\n' +
      '          </div>\n' +
      '          <img src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid image">\n' +
      '          <div class="ui blue right ribbon label">\n' +
      '            <i class="spoon icon"/> Food\n' +
      '          </div>\n' +
      '          <img src="/images/wireframe/image.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
