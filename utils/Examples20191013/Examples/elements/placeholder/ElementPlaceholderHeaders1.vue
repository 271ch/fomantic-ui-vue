<template>
  <div>
    <div class="ui ignored info message">
      Header content will have a slightly larger block size from paragraph
    </div>
    <div class="ui placeholder">
      <div class="image header">
        <div class="line"/>
        <div class="line"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementPlaceholderHeaders1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'placeholder',
      title1: 'Content',
      title2: 'Headers',
      description: 'A placeholder can contain a header',
      model: '    <div class="ui ignored info message">\n' +
      '      Header content will have a slightly larger block size from paragraph\n' +
      '    </div>\n' +
      '    <div class="ui placeholder">\n' +
      '      <div class="image header">\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
