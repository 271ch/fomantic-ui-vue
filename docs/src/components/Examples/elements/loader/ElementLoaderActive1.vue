<template>
  <div>
    <div class="ui ignored info message">
      An active loader may not be clearly visible without using a <a href="/modules/dimmer.html">ui dimmer</a>
    </div>
    <div class="ui segment">
      <div class="ui active loader"/>
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderActive1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'loader',
    title1: 'States',
    title2: 'Active',
    description: 'A loader can be active or visible',
    model: '    <div class="ui ignored info message">\n' +
      '      An active loader may not be clearly visible without using a <a href="/modules/dimmer.html">ui dimmer</a>\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <div class="ui active loader"/>\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '    </div>\n',
  },
};
</script>
