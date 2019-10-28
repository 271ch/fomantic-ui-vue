<template>
  <div>
      <div class="ignored ui info message">Having any parent element receive the class <code>ui dimmable dimmed</code> will trigger the dimmer to display.</div>
      <div class="ui dimmable dimmed segment">
        <div class="ui simple dimmer"/>
        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDimmerSimpleDimmer1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dimmer',
    title1: 'States',
    title2: 'Simple Dimmer',
    description: 'A dimmer can be controlled without Javascript',
    model: '      <div class="ignored ui info message">Having any parent element receive the class <code>ui dimmable dimmed</code> will trigger the dimmer to display.</div>\n' +
      '      <div class="ui dimmable dimmed segment">\n' +
      '        <div class="ui simple dimmer"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      </div>\n',
  },
};
</script>
