<template>
  <div>
      <div class="code" data-type="javascript">
      $('.ui.sticky')
        .sticky({
          offset       : 50,
          bottomOffset : 50,
          context      : '#element-to-follow'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleStickyAdjustingOffsetandPadding1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sticky',
    title1: 'Usage',
    title2: 'Adjusting Offset and Padding',
    description: 'If you have content fixed to the viewport it might make sense to include a top or bottom offset. An',
    model: '      <div class="code" data-type="javascript">\n' +
      '      $(\'.ui.sticky\')\n' +
      '        .sticky({\n' +
      '          offset       : 50,\n' +
      '          bottomOffset : 50,\n' +
      '          context      : \'#element-to-follow\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
