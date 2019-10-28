<template>
  <div>
      <div class="ui active progress">
        <div class="bar">
          <div class="progress"/>
        </div>
        <div class="label">Uploading Files</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressActive1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'States',
    title2: 'Active',
    description: 'A progress bar can show activity',
    model: '      <div class="ui active progress">\n' +
      '        <div class="bar">\n' +
      '          <div class="progress"/>\n' +
      '        </div>\n' +
      '        <div class="label">Uploading Files</div>\n' +
      '      </div>\n',
  },
};
</script>
