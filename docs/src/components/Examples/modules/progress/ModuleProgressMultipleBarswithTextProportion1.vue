<template>
  <div>
      <div class="ui multiple progress" data-total="200" data-value="60,30,20,30">
        <div class="blue bar">
          <div class="progress"/>
        </div>
        <div class="yellow bar">
          <div class="progress"/>
        </div>
        <div class="purple bar">
          <div class="progress"/>
        </div>
        <div class="green bar">
          <div class="progress"/>
        </div>
        <div class="label">Tickets</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressMultipleBarswithTextProportion1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Content',
    title2: 'Multiple Bars with Text (Proportion)',
    description: 'A progress bar can contain text values indicating current proportion.',
    model: '      <div class="ui multiple progress" data-total="200" data-value="60,30,20,30">\n' +
      '        <div class="blue bar">\n' +
      '          <div class="progress"/>\n' +
      '        </div>\n' +
      '        <div class="yellow bar">\n' +
      '          <div class="progress"/>\n' +
      '        </div>\n' +
      '        <div class="purple bar">\n' +
      '          <div class="progress"/>\n' +
      '        </div>\n' +
      '        <div class="green bar">\n' +
      '          <div class="progress"/>\n' +
      '        </div>\n' +
      '        <div class="label">Tickets</div>\n' +
      '      </div>\n',
  },
};
</script>
