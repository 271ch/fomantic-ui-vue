<template>
  <div>
    <div class="ui info ignored message">You can adjust the text displayed for your test ad placement by changing the value of <code>data-text</code>
    </div>
    <div class="ui medium rectangle test ad" data-text="Ad Unit 1"/>
    <div class="ui medium rectangle test ad" data-text="Ad Unit 2"/>
  </div>
</template>

<script>
export default {
  name: 'ViewAdvertisementTest1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'advertisement',
    title1: 'Variations',
    title2: 'Test',
    description: 'A advertisement can be formatted to help verify placement',
    model: '    <div class="ui info ignored message">You can adjust the text displayed for your test ad placement by changing the value of <code>data-text</code>\n' +
      '    </div>\n' +
      '    <div class="ui medium rectangle test ad" data-text="Ad Unit 1"/>\n' +
      '    <div class="ui medium rectangle test ad" data-text="Ad Unit 2"/>\n',
  },
};
</script>
