<template>
  <div>
    <div class="ui segment">
      <h2 class="ui right floated header">Floated Content</h2>
      <div class="ui clearing divider"/>
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerClearing1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'divider',
    title1: 'Variations',
    title2: 'Clearing',
    description: 'A divider can clear the contents above it',
    model: '    <div class="ui segment">\n' +
      '      <h2 class="ui right floated header">Floated Content</h2>\n' +
      '      <div class="ui clearing divider"/>\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '    </div>\n',
  },
};
</script>
