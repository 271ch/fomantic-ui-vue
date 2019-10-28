<template>
  <div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('fly left')
        ;
        </div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('fly right')
        ;
        </div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('fly up')
        ;
        </div>
        <div class="code" data-demo="true">
        $('.autumn.leaf')
          .transition('fly down')
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTransitionFly1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'transition',
    title1: 'Transitions',
    title2: 'Fly',
    description: 'An element can fly in from off canvas',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'fly left\')\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'fly right\')\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'fly up\')\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'.autumn.leaf\')\n' +
      '          .transition(\'fly down\')\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
