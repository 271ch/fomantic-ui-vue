<template>
  <div>
    <FuiLabel tag=a basic>Basic</FuiLabel>
    <FuiLabel tag=a pointing basic>Pointing</FuiLabel>
    <FuiLabel tag=a basic image="/images/avatar/small/elliot.jpg">
      Elliot
    </FuiLabel>
    <FuiLabel tag=a pointing color=red basic>Red Pointing</FuiLabel>
    <FuiLabel tag=a color=blue basic>Blue</FuiLabel>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelBasic1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Variations',
    title2: 'Basic',
    description: 'A label can reduce its complexity',
    model: '    <a class="ui basic label">Basic</a>\n' +
      '    <a class="ui pointing basic label">Pointing</a>\n' +
      '    <a class="ui image basic label">\n' +
      '      <img src="/images/avatar/small/elliot.jpg">\n' +
      '      Elliot\n' +
      '    </a><a class="ui pointing red basic label">Red Pointing</a>\n' +
      '    <a class="ui blue basic label">Blue</a>\n',
  },
};
</script>
