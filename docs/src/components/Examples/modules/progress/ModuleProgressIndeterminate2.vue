<template>
  <div>
      <div class="ui blue slow indeterminate progress">
          <div class="bar">
              <div class="progress">Slow</div>
          </div>
      </div>
      <div class="ui blue fast indeterminate progress">
          <div class="bar">
              <div class="progress">Fast</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressIndeterminate2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'States',
    title2: 'Indeterminate',
    description: 'A progress bar can be shown in different indeterminate states.',
    model: '      <div class="ui blue slow indeterminate progress">\n' +
      '          <div class="bar">\n' +
      '              <div class="progress">Slow</div>\n' +
      '          </div>\n' +
      '      </div>\n' +
      '      <div class="ui blue fast indeterminate progress">\n' +
      '          <div class="bar">\n' +
      '              <div class="progress">Fast</div>\n' +
      '          </div>\n' +
      '      </div>\n',
  },
};
</script>
