<template>
  <div>
      <div class="code" data-demo="true">
      $('.special.modal')
        .modal({
          centered: false
        })
        .modal('show')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalDisablingVerticalCentering1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Examples',
    title2: 'Disabling Vertical Centering',
    description: 'When your modal has dynamic content, or multiple steps, it can make sense to disable centering so content doesn\'t jump around vertically when its height changes.',
    model: '      <div class="code" data-demo="true">\n' +
      '      $(\'.special.modal\')\n' +
      '        .modal({\n' +
      '          centered: false\n' +
      '        })\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
