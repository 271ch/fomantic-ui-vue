<template>
  <div>
    <div class="ui ignored info message">Mobile ads will automatically only appear on mobile browser viewports</div>
    <div class="ui mobile leaderboard test ad" data-text="Mobile Leaderboard"/>
    <div class="ui mobile banner test ad" data-text="Mobile Banner"/>
  </div>
</template>

<script>
export default {
  name: 'ViewAdvertisementMobile1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'advertisement',
    title1: 'Types',
    title2: 'Mobile',
    description: 'An ad can use common mobile ad sizes',
    model: '    <div class="ui ignored info message">Mobile ads will automatically only appear on mobile browser viewports</div>\n' +
      '    <div class="ui mobile leaderboard test ad" data-text="Mobile Leaderboard"/>\n' +
      '    <div class="ui mobile banner test ad" data-text="Mobile Banner"/>\n',
  },
};
</script>
