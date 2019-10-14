<template>
  <div>
    <div class="ui banner test ad" data-text="Banner"/>
    <div class="ui vertical banner test ad" data-text="Vertical Banner"/>
    <div class="ui top banner test ad" data-text="Top Banner"/>
    <div class="ui half banner test ad" data-text="Half Banner"/>
  </div>
</template>

<script>
export default {
  name: 'ViewAdvertisementBanner1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'advertisement',
    title1: 'Types',
    title2: 'Banner',
    description: 'An ad can use banner ad unit size',
    model: '    <div class="ui banner test ad" data-text="Banner"/>\n' +
      '    <div class="ui vertical banner test ad" data-text="Vertical Banner"/>\n' +
      '    <div class="ui top banner test ad" data-text="Top Banner"/>\n' +
      '    <div class="ui half banner test ad" data-text="Half Banner"/>\n',
  },
};
</script>
