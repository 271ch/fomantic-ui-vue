<template>
  <div>
      <div class="ui top attached tabular menu">
        <div class="active item" data-tab="one">One</div>
        <div class="center item" data-tab="two">Two</div>
        <div class="item" data-tab="three">Three</div>
      </div>
      <div class="ui bottom attached active tab segment" data-tab="one">
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
      </div>
      <div class="ui bottom attached tab segment" data-tab="two">
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
      </div>
      <div class="ui bottom attached tab segment" data-tab="three">
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTabCenteredItem1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'Variations',
    title2: 'Centered Item',
    description: 'A tab can have center aligned items',
    model: '      <div class="ui top attached tabular menu">\n' +
      '        <div class="active item" data-tab="one">One</div>\n' +
      '        <div class="center item" data-tab="two">Two</div>\n' +
      '        <div class="item" data-tab="three">Three</div>\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached active tab segment" data-tab="one">\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached tab segment" data-tab="two">\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached tab segment" data-tab="three">\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '      </div>\n',
  },
};
</script>
