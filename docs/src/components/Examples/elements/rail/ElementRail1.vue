<template>
  <div>
    <h2 class="ui dividing header">Introduction</h2>
    <h3 class="ui header">When to Use</h3>
    <h3 class="ui header">Adjusting Sizes</h3>
    <div class="ui ignored warning message">
      The following examples do not use any breakpoints, so some railed content may appear outside your browser's viewport on smaller screens.
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRail1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'rail',
      title1: '???',
      title2: '???',
      description: '???',
      model: '    <h2 class="ui dividing header">Introduction</h2>\n' +
      '    <h3 class="ui header">When to Use</h3>\n' +
      '    <h3 class="ui header">Adjusting Sizes</h3>\n' +
      '    <div class="ui ignored warning message">\n' +
      '      The following examples do not use any breakpoints, so some railed content may appear outside your browser\'s viewport on smaller screens.\n' +
      '    </div>\n',
    };
  },
};
</script>
