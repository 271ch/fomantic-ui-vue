<template>
  <div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('browse')
        ;
        </div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('browse right')
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTransitionBrowse1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'transition',
    title1: 'Transitions',
    title2: 'Browse',
    description: 'An element can appear and disappear as part of a series',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'browse\')\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'browse right\')\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
