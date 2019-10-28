<template>
  <div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('horizontal flip')
        ;
        </div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('vertical flip')
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTransitionFlip1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'transition',
    title1: 'Transitions',
    title2: 'Flip',
    description: 'An element can flip into or out of view vertically or horizontally',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'horizontal flip\')\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'vertical flip\')\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
