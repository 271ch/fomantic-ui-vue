<template>
  <div>
    <div class="ui leaderboard test ad" data-text="Leaderboard"/>
    <div class="ui large leaderboard test ad" data-text="Large Leaderboard"/>
    <div class="ui billboard test ad" data-text="Billboard"/>
  </div>
</template>

<script>
export default {
  name: 'ViewAdvertisementLeaderboards1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'advertisement',
      title1: 'Types',
      title2: 'Leaderboards',
      description: 'An ad can use leaderboard ad unit size',
      model: '    <div class="ui leaderboard test ad" data-text="Leaderboard"/>\n' +
      '    <div class="ui large leaderboard test ad" data-text="Large Leaderboard"/>\n' +
      '    <div class="ui billboard test ad" data-text="Billboard"/>\n',
    };
  },
};
</script>
