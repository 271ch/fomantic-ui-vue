<template>
  <div>
    <div class="ui statistic">
      <div class="value">
        5,550
      </div>
      <div class="label">
        Downloads
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewStatisticStatistic1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'statistic',
      title1: 'Types',
      title2: 'Statistic',
      description: 'A statistic can display a value with a label above or below it.',
      model: '    <div class="ui statistic">\n' +
      '      <div class="value">\n' +
      '        5,550\n' +
      '      </div>\n' +
      '      <div class="label">\n' +
      '        Downloads\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
