<template>
  <div>
      <div class="ui button">Show fluid popup</div>
      <div class="ui fluid popup">
        <div class="ui four column divided center aligned grid">
          <div class="column">1</div>
          <div class="column">2</div>
          <div class="column">3</div>
          <div class="column">4</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupFluid1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Variations',
    title2: 'Fluid',
    description: 'A fluid popup will take up the entire width of its offset container',
    model: '      <div class="ui button">Show fluid popup</div>\n' +
      '      <div class="ui fluid popup">\n' +
      '        <div class="ui four column divided center aligned grid">\n' +
      '          <div class="column">1</div>\n' +
      '          <div class="column">2</div>\n' +
      '          <div class="column">3</div>\n' +
      '          <div class="column">4</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
