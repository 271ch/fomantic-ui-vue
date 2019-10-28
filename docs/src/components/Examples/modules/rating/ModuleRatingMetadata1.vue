<template>
  <div>
      <div class="code" data-type="javascript">
        $('.ui.rating')
          .rating()
        ;
      </div>
      <div class="code" data-type="html">
        <div class="ui rating" data-icon="circle" data-rating="3" data-max-rating="5"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleRatingMetadata1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'rating',
    title1: 'Initializing',
    title2: 'Metadata',
    description: 'You can specify the icon, starting rating and max rating in metadata.',
    model: '      <div class="code" data-type="javascript">\n' +
      '        $(\'.ui.rating\')\n' +
      '          .rating()\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <div class="ui rating" data-icon="circle" data-rating="3" data-max-rating="5"/>\n' +
      '      </div>\n',
  },
};
</script>
