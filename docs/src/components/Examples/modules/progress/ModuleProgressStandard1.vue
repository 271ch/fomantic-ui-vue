<template>
  <div>
      <div class="ui progress">
        <div class="bar">
          <div class="progress"/>
        </div>
        <div class="label">Uploading Files</div>
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
  name: 'ModuleProgressStandard1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Types',
    title2: 'Standard',
    description: 'A standard progress bar',
    model: '      <div class="ui progress">\n' +
      '        <div class="bar">\n' +
      '          <div class="progress"/>\n' +
      '        </div>\n' +
      '        <div class="label">Uploading Files</div>\n' +
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
