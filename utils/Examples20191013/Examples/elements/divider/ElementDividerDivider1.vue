<template>
  <div>
    <div class="ignored ui warning message">To add a divider between parts of a grid use a <a href="/collections/grid.html#divided"><code>divided grid</code></a> variation.</div>
    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
    <div class="ui divider"/>
    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerDivider1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'divider',
      title1: 'Types',
      title2: 'Divider',
      description: 'A standard divider',
      model: '    <div class="ignored ui warning message">To add a divider between parts of a grid use a <a href="/collections/grid.html#divided"><code>divided grid</code></a> variation.</div>\n' +
      '    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '    <div class="ui divider"/>\n' +
      '    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n',
    };
  },
};
</script>
