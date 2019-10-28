<template>
  <div>
      <div class="ui ignored info message">
        Some small sizes may not be able to fit an inlined label
      </div>
      <div class="ui tiny progress">
        <div class="bar"/>
        <div class="label">Tiny</div>
      </div>
      <div class="ui small progress">
        <div class="bar"/>
        <div class="label">Small</div>
      </div>
      <div class="ui progress">
        <div class="bar"/>
        <div class="label">Standard</div>
      </div>
      <div class="ui large progress">
        <div class="bar"/>
        <div class="label">Large</div>
      </div>
      <div class="ui big progress">
        <div class="bar"/>
        <div class="label">Big</div>
      </div>
      <div class="ignored">
        <div class="ui icon buttons">
          <div class="decrement ui basic red button icon"><i class="minus icon"/></div>
          <div class="increment ui basic green button icon"><i class="plus icon"/></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressSize1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Variations',
    title2: 'Size',
    description: 'A progress bar can vary in size',
    model: '      <div class="ui ignored info message">\n' +
      '        Some small sizes may not be able to fit an inlined label\n' +
      '      </div>\n' +
      '      <div class="ui tiny progress">\n' +
      '        <div class="bar"/>\n' +
      '        <div class="label">Tiny</div>\n' +
      '      </div>\n' +
      '      <div class="ui small progress">\n' +
      '        <div class="bar"/>\n' +
      '        <div class="label">Small</div>\n' +
      '      </div>\n' +
      '      <div class="ui progress">\n' +
      '        <div class="bar"/>\n' +
      '        <div class="label">Standard</div>\n' +
      '      </div>\n' +
      '      <div class="ui large progress">\n' +
      '        <div class="bar"/>\n' +
      '        <div class="label">Large</div>\n' +
      '      </div>\n' +
      '      <div class="ui big progress">\n' +
      '        <div class="bar"/>\n' +
      '        <div class="label">Big</div>\n' +
      '      </div>\n' +
      '      <div class="ignored">\n' +
      '        <div class="ui icon buttons">\n' +
      '          <div class="decrement ui basic red button icon"><i class="minus icon"/></div>\n' +
      '          <div class="increment ui basic green button icon"><i class="plus icon"/></div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
