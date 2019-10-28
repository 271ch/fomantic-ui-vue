<template>
  <div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('slide down')
        ;
        </div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('slide up')
        ;
        </div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('slide left')
        ;
        </div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('slide right')
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTransitionSlide1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'transition',
    title1: 'Transitions',
    title2: 'Slide',
    description: 'An element can appear to slide in from above or below',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'slide down\')\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'slide up\')\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'slide left\')\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'slide right\')\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
