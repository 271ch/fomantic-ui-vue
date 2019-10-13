<template>
  <div>
    <div class="ui ignored info message">Paragraphs are used to group lines together.</div>
    <div class="ui placeholder">
      <div class="paragraph">
        <div class="line"/>
        <div class="line"/>
        <div class="line"/>
        <div class="line"/>
        <div class="line"/>
      </div>
      <div class="paragraph">
        <div class="line"/>
        <div class="line"/>
        <div class="line"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementPlaceholderParagraph1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'placeholder',
      title1: 'Content',
      title2: 'Paragraph',
      description: 'A placeholder can contain a paragraph',
      model: '    <div class="ui ignored info message">Paragraphs are used to group lines together.</div>\n' +
      '    <div class="ui placeholder">\n' +
      '      <div class="paragraph">\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '      </div>\n' +
      '      <div class="paragraph">\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
