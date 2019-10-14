<template>
  <div>
    <a class="ui basic label">Basic</a>
    <a class="ui pointing basic label">Pointing</a>
    <a class="ui basic image label">
      <img src="/images/avatar/small/elliot.jpg"/>
      Elliot
    </a><a class="ui pointing red basic label">Red Pointing</a>
    <a class="ui blue basic label">Blue</a>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelBasic1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'label',
    title1: 'Variations',
    title2: 'Basic',
    description: 'A label can reduce its complexity',
    model: '    <a class="ui basic label">Basic</a>\n' +
      '    <a class="ui pointing basic label">Pointing</a>\n' +
      '    <a class="ui basic image label">\n' +
      '      <img src="/images/avatar/small/elliot.jpg"/>\n' +
      '      Elliot\n' +
      '    </a><a class="ui pointing red basic label">Red Pointing</a>\n' +
      '    <a class="ui blue basic label">Blue</a>\n',
  },
};
</script>
