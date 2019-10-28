<template>
  <div>
      <div class="ui slider" id="slider-custom-step"/>
      <br/>
      <div class="ui input">
        <input type="text" id="slider-input-3" disabled="disabled"/>
      </div>
      <div class="code" data-type="javascript">
        $('.ui.slider')
          .slider({
            min: 0,
            max: 10,
            start: 4,
            step: 2
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSliderStep1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'slider',
    title1: 'Examples',
    title2: 'Step',
    description: 'A slider can have a custom step...',
    model: '      <div class="ui slider" id="slider-custom-step"/>\n' +
      '      <br/>\n' +
      '      <div class="ui input">\n' +
      '        <input type="text" id="slider-input-3" disabled="disabled"/>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '        $(\'.ui.slider\')\n' +
      '          .slider({\n' +
      '            min: 0,\n' +
      '            max: 10,\n' +
      '            start: 4,\n' +
      '            step: 2\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
