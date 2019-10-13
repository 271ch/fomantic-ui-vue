<template>
  <div>
    <div class="ui ignored info message">
      Placeholders can include <code>paragraph</code>, <code>header</code>, <code>image header</code> and <code>image</code> to let you format the loaders to emulate the content being loaded.
    </div>
    <div class="ui placeholder">
      <div class="image header">
        <div class="line"/>
        <div class="line"/>
      </div>
      <div class="paragraph">
        <div class="line"/>
        <div class="line"/>
        <div class="line"/>
        <div class="line"/>
        <div class="line"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementPlaceholderPlaceholder1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'placeholder',
      title1: 'Types',
      title2: 'Placeholder',
      description: 'A placeholder is used to reserve space for content that soon will appear in a layout.',
      model: '    <div class="ui ignored info message">\n' +
      '      Placeholders can include <code>paragraph</code>, <code>header</code>, <code>image header</code> and <code>image</code> to let you format the loaders to emulate the content being loaded.\n' +
      '    </div>\n' +
      '    <div class="ui placeholder">\n' +
      '      <div class="image header">\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '      </div>\n' +
      '      <div class="paragraph">\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '        <div class="line"/>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
