<template>
  <div>
      <div class="ui slider" id="slider-1"/><br/>
      <div class="ui input">
        <input type="text" id="slider-input-1" disabled="disabled"/>
      </div>
      <div class="code" data-type="javascript">
      $('.ui.slider')
        .slider()
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSliderSlider1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'slider',
    title1: 'Types',
    title2: 'Slider',
    description: 'A standard slider',
    model: '      <div class="ui slider" id="slider-1"/><br/>\n' +
      '      <div class="ui input">\n' +
      '        <input type="text" id="slider-input-1" disabled="disabled"/>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'.ui.slider\')\n' +
      '        .slider()\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
