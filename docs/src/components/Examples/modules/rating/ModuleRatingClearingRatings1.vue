<template>
  <div>
      <div class="evaluated code" data-type="javascript">
      $('.clearing.example .rating')
        .rating('setting', 'clearable', true)
      ;
      </div>
      <div class="ui red demo rating" data-icon="heart" data-rating="3">
        <i class="heart icon"/>
        <i class="heart icon"/>
        <i class="heart icon"/>
        <i class="heart icon"/>
        <i class="heart icon"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleRatingClearingRatings1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'rating',
    title1: 'Examples',
    title2: 'Clearing Ratings',
    description: 'When clearable is set to',
    model: '      <div class="evaluated code" data-type="javascript">\n' +
      '      $(\'.clearing.example .rating\')\n' +
      '        .rating(\'setting\', \'clearable\', true)\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui red demo rating" data-icon="heart" data-rating="3">\n' +
      '        <i class="heart icon"/>\n' +
      '        <i class="heart icon"/>\n' +
      '        <i class="heart icon"/>\n' +
      '        <i class="heart icon"/>\n' +
      '        <i class="heart icon"/>\n' +
      '      </div>\n',
  },
};
</script>
