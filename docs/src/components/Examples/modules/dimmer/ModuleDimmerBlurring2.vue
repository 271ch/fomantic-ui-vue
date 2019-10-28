<template>
  <div>
      <div class="ui blurring segment">
        <div class="ui inverted dimmer"/>
        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
      </div>
      <div class="ui ignored ignored icon buttons">
        <div class="ui show button"><i class="plus icon"/></div>
        <div class="ui hide button"><i class="minus icon"/></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDimmerBlurring2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dimmer',
    title1: 'States',
    title2: 'Blurring',
    description: 'A dimmable element can blur its contents',
    model: '      <div class="ui blurring segment">\n' +
      '        <div class="ui inverted dimmer"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      </div>\n' +
      '      <div class="ui ignored ignored icon buttons">\n' +
      '        <div class="ui show button"><i class="plus icon"/></div>\n' +
      '        <div class="ui hide button"><i class="minus icon"/></div>\n' +
      '      </div>\n',
  },
};
</script>
