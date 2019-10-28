<template>
  <div>
      <div class="ui slider" id="slider-unstepped"/>
      <br/>
      <div class="ui input">
        <input type="text" id="slider-input-unstepped" disabled="disabled"/>
      </div>
      <div class="code" data-type="javascript">
        $('.ui.slider')
          .slider({
            min: 0,
            max: 10,
            start: 3.82,
            step: 0
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSliderStep2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'slider',
    title1: 'Examples',
    title2: 'Step',
    description: 'A slider can have a custom step...',
    model: '      <div class="ui slider" id="slider-unstepped"/>\n' +
      '      <br/>\n' +
      '      <div class="ui input">\n' +
      '        <input type="text" id="slider-input-unstepped" disabled="disabled"/>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '        $(\'.ui.slider\')\n' +
      '          .slider({\n' +
      '            min: 0,\n' +
      '            max: 10,\n' +
      '            start: 3.82,\n' +
      '            step: 0\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
