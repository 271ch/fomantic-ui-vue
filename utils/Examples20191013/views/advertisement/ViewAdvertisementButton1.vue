<template>
  <div>
    <div class="ui button test ad" data-text="Button"/>
    <div class="ui square button test ad" data-text="Square Button"/>
    <div class="ui small button test ad" data-text="Small Button"/>
  </div>
</template>

<script>
export default {
  name: 'ViewAdvertisementButton1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'advertisement',
    title1: 'Types',
    title2: 'Button',
    description: 'An ad can use button ad unit size',
    model: '    <div class="ui button test ad" data-text="Button"/>\n' +
      '    <div class="ui square button test ad" data-text="Square Button"/>\n' +
      '    <div class="ui small button test ad" data-text="Small Button"/>\n',
  },
};
</script>
