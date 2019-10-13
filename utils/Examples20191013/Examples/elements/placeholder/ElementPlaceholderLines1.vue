<template>
  <div>
    <div class="ui ignored info message">By default, repeated lines will appear varied in width. However, it may be useful to specify an exact length to make it match up with content more effectively</div>
    <div class="ui placeholder">
      <div class="line"/>
      <div class="line"/>
      <div class="line"/>
      <div class="line"/>
      <div class="line"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementPlaceholderLines1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'placeholder',
      title1: 'Content',
      title2: 'Lines',
      description: 'A placeholder can contain have lines of text',
      model: '    <div class="ui ignored info message">By default, repeated lines will appear varied in width. However, it may be useful to specify an exact length to make it match up with content more effectively</div>\n' +
      '    <div class="ui placeholder">\n' +
      '      <div class="line"/>\n' +
      '      <div class="line"/>\n' +
      '      <div class="line"/>\n' +
      '      <div class="line"/>\n' +
      '      <div class="line"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
