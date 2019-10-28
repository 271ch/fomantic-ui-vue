<template>
  <div>
      <div class="ui progress error">
        <div class="bar">
          <div class="progress"/>
        </div>
        <div class="label">There was an error.</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressError1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'States',
    title2: 'Error',
    description: 'A progress bar can show an error state',
    model: '      <div class="ui progress error">\n' +
      '        <div class="bar">\n' +
      '          <div class="progress"/>\n' +
      '        </div>\n' +
      '        <div class="label">There was an error.</div>\n' +
      '      </div>\n',
  },
};
</script>
