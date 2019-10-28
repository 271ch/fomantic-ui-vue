<template>
  <div>
      <div class="ui progress success">
        <div class="bar">
          <div class="progress"/>
        </div>
        <div class="label">Everything worked, your file is all ready.</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressSuccess1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'States',
    title2: 'Success',
    description: 'A progress bar can show a success state',
    model: '      <div class="ui progress success">\n' +
      '        <div class="bar">\n' +
      '          <div class="progress"/>\n' +
      '        </div>\n' +
      '        <div class="label">Everything worked, your file is all ready.</div>\n' +
      '      </div>\n',
  },
};
</script>
