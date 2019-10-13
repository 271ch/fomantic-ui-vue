<template>
  <div>
    <div class="ui ignored info message">
      To specify an approximate text area size use the <code>rows</code> attribute.
    </div>
    <div class="ui form">
      <div class="field">
        <label>Text</label>
        <textarea/>
      </div>
      <div class="field">
        <label>Short Text</label>
        <textarea rows="2"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormTextArea1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Content',
      title2: 'Text Area',
      description: 'A textarea can be used to allow for extended user input.',
      model: '    <div class="ui ignored info message">\n' +
      '      To specify an approximate text area size use the <code>rows</code> attribute.\n' +
      '    </div>\n' +
      '    <div class="ui form">\n' +
      '      <div class="field">\n' +
      '        <label>Text</label>\n' +
      '        <textarea/>\n' +
      '      </div>\n' +
      '      <div class="field">\n' +
      '        <label>Short Text</label>\n' +
      '        <textarea rows="2"/>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
