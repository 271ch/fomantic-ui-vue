<template>
  <div>
    <div class="ui skyscraper test ad" data-text="Skyscraper"/>
    <div class="ui wide skyscraper test ad" data-text="Wide Skyscraper"/>
  </div>
</template>

<script>
export default {
  name: 'ViewAdvertisementSkyscraper1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'advertisement',
    title1: 'Types',
    title2: 'Skyscraper',
    description: 'An ad can use skyscraper ad unit size',
    model: '    <div class="ui skyscraper test ad" data-text="Skyscraper"/>\n' +
      '    <div class="ui wide skyscraper test ad" data-text="Wide Skyscraper"/>\n',
  },
};
</script>
