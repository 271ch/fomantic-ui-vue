<template>
  <div>
      <div class="ui labeled ticked slider" id="slider-smooth"/>
      <div class="code" data-type="javascript">
        $('.ui.slider')
          .slider({
            min: 0,
            max: 10,
            start: 4,
            step: 2
            smooth: true
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSliderSmoothslide1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'slider',
    title1: 'Examples',
    title2: 'Smooth slide',
    description: 'A slider can have a smooth slide',
    model: '      <div class="ui labeled ticked slider" id="slider-smooth"/>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '        $(\'.ui.slider\')\n' +
      '          .slider({\n' +
      '            min: 0,\n' +
      '            max: 10,\n' +
      '            start: 4,\n' +
      '            step: 2\n' +
      '            smooth: true\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
