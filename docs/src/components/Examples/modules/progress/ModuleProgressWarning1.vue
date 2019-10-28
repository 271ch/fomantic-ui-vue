<template>
  <div>
      <div class="ui progress warning">
        <div class="bar">
          <div class="progress"/>
        </div>
        <div class="label">Your file didn't meet the minimum resolution requirements.</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressWarning1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'States',
    title2: 'Warning',
    description: 'A progress bar can show a warning state',
    model: '      <div class="ui progress warning">\n' +
      '        <div class="bar">\n' +
      '          <div class="progress"/>\n' +
      '        </div>\n' +
      '        <div class="label">Your file didn\'t meet the minimum resolution requirements.</div>\n' +
      '      </div>\n',
  },
};
</script>
