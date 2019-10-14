<template>
  <div>
    <div class="ui ignored info message">
      These additional examples use the <code>test</code> variation to appear on the page. <code>ui ad</code> is best used as a wrapper for third party ad network content like <a href="http://www.google.com/adsense/start/" target="_blank">AdSense</a> or <a href="http://www.google.com/doubleclick/publishers/welcome/" target="_blank">DoubleClick</a>.
    </div>
    <div class="ui medium rectangle test ad" data-text="Medium Rectangle"/>
    <div class="ui banner test ad" data-text="Banner"/>
    <div class="ui leaderboard test ad" data-text="Leaderboard"/>
    <div class="ui large rectangle test ad" data-text="Large Rectangle"/>
    <div class="ui half page test ad" data-text="Half Page"/>
  </div>
</template>

<script>
export default {
  name: 'ViewAdvertisementCommonUnits1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'advertisement',
    title1: 'Types',
    title2: 'Common Units',
    description: 'An advertisement can appear in common ad unit sizes',
    model: '    <div class="ui ignored info message">\n' +
      '      These additional examples use the <code>test</code> variation to appear on the page. <code>ui ad</code> is best used as a wrapper for third party ad network content like <a href="http://www.google.com/adsense/start/" target="_blank">AdSense</a> or <a href="http://www.google.com/doubleclick/publishers/welcome/" target="_blank">DoubleClick</a>.\n' +
      '    </div>\n' +
      '    <div class="ui medium rectangle test ad" data-text="Medium Rectangle"/>\n' +
      '    <div class="ui banner test ad" data-text="Banner"/>\n' +
      '    <div class="ui leaderboard test ad" data-text="Leaderboard"/>\n' +
      '    <div class="ui large rectangle test ad" data-text="Large Rectangle"/>\n' +
      '    <div class="ui half page test ad" data-text="Half Page"/>\n',
  },
};
</script>
