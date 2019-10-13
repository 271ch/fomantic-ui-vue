<template>
  <div>
    <div class="ui statistic">
      <div class="label">
        Views
      </div>
      <div class="value">
        40,509
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewStatisticStatistic2',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'statistic',
      title1: 'Types',
      title2: 'Statistic',
      description: 'A statistic can display a value with a label above or below it.',
      model: '    <div class="ui statistic">\n' +
      '      <div class="label">\n' +
      '        Views\n' +
      '      </div>\n' +
      '      <div class="value">\n' +
      '        40,509\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
