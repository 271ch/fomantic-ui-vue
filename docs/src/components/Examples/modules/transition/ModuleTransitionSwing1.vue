<template>
  <div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('swing left')
        ;
        </div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('swing right')
        ;
        </div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('swing up')
        ;
        </div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('swing down')
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTransitionSwing1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'transition',
    title1: 'Transitions',
    title2: 'Swing',
    description: 'An element can swing into view',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'swing left\')\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'swing right\')\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'swing up\')\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'swing down\')\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
