<template>
  <div>
      <div class="ui message">
        A sidebar will automatically adjust its animations to match any custom size specified in CSS
      </div>
      <div class="code" data-type="html">
        <div class="ui thin sidebar"/>
        <div class="ui very thin sidebar"/>
        <div class="ui sidebar"/>
        <div class="ui wide sidebar"/>
        <div class="ui very wide sidebar"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSidebarWidth1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Variations',
    title2: 'Width',
    description: 'A sidebar can specify its width',
    model: '      <div class="ui message">\n' +
      '        A sidebar will automatically adjust its animations to match any custom size specified in CSS\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <div class="ui thin sidebar"/>\n' +
      '        <div class="ui very thin sidebar"/>\n' +
      '        <div class="ui sidebar"/>\n' +
      '        <div class="ui wide sidebar"/>\n' +
      '        <div class="ui very wide sidebar"/>\n' +
      '      </div>\n',
  },
};
</script>
