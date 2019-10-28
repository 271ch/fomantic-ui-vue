<template>
  <div>
      <div class="ui disabled progress">
        <div class="bar"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressDisabled1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'States',
    title2: 'Disabled',
    description: 'A progress bar can be disabled',
    model: '      <div class="ui disabled progress">\n' +
      '        <div class="bar"/>\n' +
      '      </div>\n',
  },
};
</script>
