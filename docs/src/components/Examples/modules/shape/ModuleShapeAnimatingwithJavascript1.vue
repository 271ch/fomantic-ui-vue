<template>
  <div>
      <div class="code">
        $('.shape').shape();
      </div>
      <div class="code">
        $('.shape').shape('flip up');
      </div>
      <div class="code">
      $('.shape')
        .shape('set next side', '.second.side')
        .shape('flip up')
      ;
      </div>
      <div class="code">
        $('.shape').shape('repaint');
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleShapeAnimatingwithJavascript1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'shape',
    title1: 'Getting Started',
    title2: 'Animating with Javascript',
    description: '???',
    model: '      <div class="code">\n' +
      '        $(\'.shape\').shape();\n' +
      '      </div>\n' +
      '      <div class="code">\n' +
      '        $(\'.shape\').shape(\'flip up\');\n' +
      '      </div>\n' +
      '      <div class="code">\n' +
      '      $(\'.shape\')\n' +
      '        .shape(\'set next side\', \'.second.side\')\n' +
      '        .shape(\'flip up\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="code">\n' +
      '        $(\'.shape\').shape(\'repaint\');\n' +
      '      </div>\n',
  },
};
</script>
