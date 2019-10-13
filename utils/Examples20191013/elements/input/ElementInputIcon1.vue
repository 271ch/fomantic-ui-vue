<template>
  <div>
    <div class="ui ignored message">
      Input icons do not receive <code>pointer-events</code> unless a <code>link icon</code> is used.
    </div>
    <div class="ui icon input">
      <input type="text" placeholder="Search..."/>
      <i class="search icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputIcon1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'Variations',
      title2: 'Icon',
      description: 'An input can be formatted with an icon',
      model: '    <div class="ui ignored message">\n' +
      '      Input icons do not receive <code>pointer-events</code> unless a <code>link icon</code> is used.\n' +
      '    </div>\n' +
      '    <div class="ui icon input">\n' +
      '      <input type="text" placeholder="Search..."/>\n' +
      '      <i class="search icon"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
