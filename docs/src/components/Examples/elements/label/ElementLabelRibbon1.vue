<template>
  <div>
    <div class="ui two column grid">
      <div class="column">
        <div class="ui raised segment">
          <a class="ui red ribbon label">Overview</a>
          <span>Account Details</span>
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          <a class="ui blue ribbon label">Community</a> User Reviews
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
      </div>
      <div class="column">
        <div class="ui segment">
          <a class="ui orange right ribbon label">Specs</a>
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
          <a class="ui teal right ribbon label">Reviews</a>
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelRibbon1',
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
      '        <div class="ui raised segment">\n' +
      '          <a class="ui red ribbon label">Overview</a>\n' +
      '          <span>Account Details</span>\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          <a class="ui blue ribbon label">Community</a> User Reviews\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="column">\n' +
      '        <div class="ui segment">\n' +
      '          <a class="ui orange right ribbon label">Specs</a>\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '          <a class="ui teal right ribbon label">Reviews</a>\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
