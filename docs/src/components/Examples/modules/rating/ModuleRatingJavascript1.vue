<template>
  <div>
      <div class="code" data-type="javascript">
        $('.ui.rating')
          .rating({
            icon: 'circle',
            initialRating: 3,
            maxRating: 5
          })
        ;
      </div>
      <div class="code" data-type="html">
        <div class="ui rating"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleRatingJavascript1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'rating',
    title1: 'Initializing',
    title2: 'Javascript',
    description: 'You can specify the icon and rating values in Javascript',
    model: '      <div class="code" data-type="javascript">\n' +
      '        $(\'.ui.rating\')\n' +
      '          .rating({\n' +
      '            icon: \'circle\',\n' +
      '            initialRating: 3,\n' +
      '            maxRating: 5\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <div class="ui rating"/>\n' +
      '      </div>\n',
  },
};
</script>
