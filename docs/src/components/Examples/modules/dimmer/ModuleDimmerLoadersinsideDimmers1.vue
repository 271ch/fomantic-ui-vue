<template>
  <div>
      <div class="ui segment">
        <div class="ui inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
      </div>
      <div class="ignored ui icon buttons">
        <div class="ui show button"><i class="plus icon"/></div>
        <div class="ui hide button"><i class="minus icon"/></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDimmerLoadersinsideDimmers1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dimmer',
    title1: 'Examples',
    title2: 'Loaders inside Dimmers',
    description: 'Any loader inside a dimmer will automatically use an appropriate color to match',
    model: '      <div class="ui segment">\n' +
      '        <div class="ui inverted dimmer">\n' +
      '          <div class="ui text loader">Loading</div>\n' +
      '        </div>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '        <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      </div>\n' +
      '      <div class="ignored ui icon buttons">\n' +
      '        <div class="ui show button"><i class="plus icon"/></div>\n' +
      '        <div class="ui hide button"><i class="minus icon"/></div>\n' +
      '      </div>\n',
  },
};
</script>
