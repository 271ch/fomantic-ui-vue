<template>
  <div>
      <div class="ui progress">
        <div class="bar">
          <div class="progress"/>
        </div>
        <div class="label">Uploading Files</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressLabel1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Content',
    title2: 'Label',
    description: 'A progress element can contain a label',
    model: '      <div class="ui progress">\n' +
      '        <div class="bar">\n' +
      '          <div class="progress"/>\n' +
      '        </div>\n' +
      '        <div class="label">Uploading Files</div>\n' +
      '      </div>\n',
  },
};
</script>
