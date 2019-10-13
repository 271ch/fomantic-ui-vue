<template>
  <div>
    <div class="ui labeled input">
      <div class="ui label">
        http://
      </div>
      <input type="text" placeholder="mysite.com"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLabeled1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'Variations',
      title2: 'Labeled',
      description: 'An input can be formatted with a label',
      model: '    <div class="ui labeled input">\n' +
      '      <div class="ui label">\n' +
      '        http://\n' +
      '      </div>\n' +
      '      <input type="text" placeholder="mysite.com"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
