<template>
  <div>
      <div class="ui progress">
        <div class="bar"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressBar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Content',
    title2: 'Bar',
    description: 'A progress element can contain a bar visually indicating progress',
    model: '      <div class="ui progress">\n' +
      '        <div class="bar"/>\n' +
      '      </div>\n',
  },
};
</script>
