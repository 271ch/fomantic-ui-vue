<template>
  <div>
      <div class="code" data-type="javascript" data-demo="true">
      $('.toggle.example .rating')
        .rating('disable')
      ;
      </div>
      <div class="code" data-type="javascript" data-demo="true">
      $('.toggle.example .rating')
        .rating('enable')
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
  name: 'ModuleRatingReadOnlyRatings1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'rating',
    title1: 'Examples',
    title2: 'Read-Only Ratings',
    description: 'You can disable or enable interactive rating',
    model: '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '      $(\'.toggle.example .rating\')\n' +
      '        .rating(\'disable\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '      $(\'.toggle.example .rating\')\n' +
      '        .rating(\'enable\')\n' +
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
