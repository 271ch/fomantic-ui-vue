<template>
  <div>
      <div class="ui multiple progress" data-percent="50,0,10,20">
        <div class="blue bar"/>
        <div class="yellow bar"/>
        <div class="purple bar"/>
        <div class="green bar"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressMultipleBars1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Content',
    title2: 'Multiple Bars',
    description: 'A progress element can have multiple bars.',
    model: '      <div class="ui multiple progress" data-percent="50,0,10,20">\n' +
      '        <div class="blue bar"/>\n' +
      '        <div class="yellow bar"/>\n' +
      '        <div class="purple bar"/>\n' +
      '        <div class="green bar"/>\n' +
      '      </div>\n',
  },
};
</script>
