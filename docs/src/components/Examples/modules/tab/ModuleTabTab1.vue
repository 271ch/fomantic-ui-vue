<template>
  <div>
      <div class="ui ignored info message">A tab is hidden by default, and will only become visible when given the class name <code>active</code> or when activated with Javascript. For more information, see the usage section.</div>
      <div class="ui top attached tabular menu">
        <div class="item">Tab</div>
      </div>
      <div class="ui bottom attached tab segment">
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTabTab1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'Type',
    title2: 'Tab',
    description: 'A basic tab',
    model: '      <div class="ui ignored info message">A tab is hidden by default, and will only become visible when given the class name <code>active</code> or when activated with Javascript. For more information, see the usage section.</div>\n' +
      '      <div class="ui top attached tabular menu">\n' +
      '        <div class="item">Tab</div>\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached tab segment">\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '      </div>\n',
  },
};
</script>
