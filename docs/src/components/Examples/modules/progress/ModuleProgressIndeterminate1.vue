<template>
  <div>
      <div class="ui warning ignored message">
        The <code>indeterminate</code> progress state is not supposed to be used in combination with <code>multiple</code> progress bars
      </div>
      <div class="ui blue indeterminate progress">
          <div class="bar">
              <div class="progress">Pulsating (default)</div>
          </div>
      </div>
      <div class="ui blue filling indeterminate progress">
          <div class="bar">
              <div class="progress">Filling</div>
          </div>
      </div>
      <div class="ui blue sliding indeterminate progress">
          <div class="bar">
              <div class="progress">Sliding</div>
          </div>
      </div>
      <div class="ui blue swinging indeterminate progress">
          <div class="bar">
              <div class="progress">Swinging</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressIndeterminate1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'States',
    title2: 'Indeterminate',
    description: 'A progress bar can be shown in different indeterminate states.',
    model: '      <div class="ui warning ignored message">\n' +
      '        The <code>indeterminate</code> progress state is not supposed to be used in combination with <code>multiple</code> progress bars\n' +
      '      </div>\n' +
      '      <div class="ui blue indeterminate progress">\n' +
      '          <div class="bar">\n' +
      '              <div class="progress">Pulsating (default)</div>\n' +
      '          </div>\n' +
      '      </div>\n' +
      '      <div class="ui blue filling indeterminate progress">\n' +
      '          <div class="bar">\n' +
      '              <div class="progress">Filling</div>\n' +
      '          </div>\n' +
      '      </div>\n' +
      '      <div class="ui blue sliding indeterminate progress">\n' +
      '          <div class="bar">\n' +
      '              <div class="progress">Sliding</div>\n' +
      '          </div>\n' +
      '      </div>\n' +
      '      <div class="ui blue swinging indeterminate progress">\n' +
      '          <div class="bar">\n' +
      '              <div class="progress">Swinging</div>\n' +
      '          </div>\n' +
      '      </div>\n',
  },
};
</script>
