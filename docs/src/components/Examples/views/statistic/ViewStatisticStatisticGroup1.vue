<template>
  <div>
    <div class="ui statistics">
      <div class="statistic">
        <div class="value">
          22
        </div>
        <div class="label">
          Faves
        </div>
      </div>
      <div class="statistic">
        <div class="value">
          31,200
        </div>
        <div class="label">
          Views
        </div>
      </div>
      <div class="statistic">
        <div class="value">
          22
        </div>
        <div class="label">
          Members
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewStatisticStatisticGroup1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'statistic',
      title1: 'Types',
      title2: 'Statistic Group',
      description: 'A group of statistics',
      model: '    <div class="ui statistics">\n' +
      '      <div class="statistic">\n' +
      '        <div class="value">\n' +
      '          22\n' +
      '        </div>\n' +
      '        <div class="label">\n' +
      '          Faves\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="statistic">\n' +
      '        <div class="value">\n' +
      '          31,200\n' +
      '        </div>\n' +
      '        <div class="label">\n' +
      '          Views\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="statistic">\n' +
      '        <div class="value">\n' +
      '          22\n' +
      '        </div>\n' +
      '        <div class="label">\n' +
      '          Members\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
