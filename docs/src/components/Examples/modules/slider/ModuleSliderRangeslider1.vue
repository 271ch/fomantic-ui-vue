<template>
  <div>
      <div class="ui labeled ticked range slider" id="slider-range"/><br/>
      <div class="ui input">
        <input type="text" id="range-slider-input-1" disabled="disabled"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSliderRangeslider1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'slider',
    title1: 'Types',
    title2: 'Range slider',
    description: 'A range slider which allow you to select a range between two values',
    model: '      <div class="ui labeled ticked range slider" id="slider-range"/><br/>\n' +
      '      <div class="ui input">\n' +
      '        <input type="text" id="range-slider-input-1" disabled="disabled"/>\n' +
      '      </div>\n',
  },
};
</script>
