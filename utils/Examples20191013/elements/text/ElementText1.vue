<template>
  <div>
    <h2 class="ui header">Definition</h2>
    <div class="no example">
      <h4 class="ui header">Text</h4>
      <p>A text is always used inline and uses one color from the FUI color palette</p>
      <div class="ui info message">
        To not interfere with all other colorable elements the <code>text</code> element is limited to be used in <code>span</code> tags only
      </div>
      <div class="code" data-type="html" data-preview="true">
          <div class="ui segment">
            This is <span class="ui red text">red</span> inline text and this is <span class="ui blue text">blue</span> inline text and this is <span class="ui purple text">purple</span> inline text
          </div>
          <div class="ui inverted segment">
            This is <span class="ui inverted red text">red</span> inline text and this is <span class="ui inverted blue text">blue</span> inline text and this is <span class="ui inverted purple text">purple</span> inline text
          </div>
      </div>
    </div>
    <h2 class="ui dividing header">Variations</h2>
    <div class="example">
      <h4 class="ui header">Size
        <div class="ui black label">New in 2.7.2</div>
      </h4>
      <p>Text can vary in the same sizes as icons</p>
        <div class="ui segment">
          <p>Starting with <span class="ui mini red text">mini</span> text</p>
          <p>which turns into <span class="ui tiny red text">tiny</span> text</p>
          <p>changing to <span class="ui small red text">small</span> text until it is</p>
          <p>the default <span class="ui medium red text">medium</span> text</p>
          <p>and could be <span class="ui large red text">large</span> text</p>
          <p>to turn into <span class="ui big red text">big</span> text</p>
          <p>then growing to <span class="ui huge red text">huge</span> text</p>
          <p>to finally become <span class="ui red massive text">massive</span> text</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementText1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'text',
      title1: '???',
      title2: '???',
      description: '???',
      model: '    <h2 class="ui header">Definition</h2>\n' +
      '    <div class="no example">\n' +
      '      <h4 class="ui header">Text</h4>\n' +
      '      <p>A text is always used inline and uses one color from the FUI color palette</p>\n' +
      '      <div class="ui info message">\n' +
      '        To not interfere with all other colorable elements the <code>text</code> element is limited to be used in <code>span</code> tags only\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-preview="true">\n' +
      '          <div class="ui segment">\n' +
      '            This is <span class="ui red text">red</span> inline text and this is <span class="ui blue text">blue</span> inline text and this is <span class="ui purple text">purple</span> inline text\n' +
      '          </div>\n' +
      '          <div class="ui inverted segment">\n' +
      '            This is <span class="ui inverted red text">red</span> inline text and this is <span class="ui inverted blue text">blue</span> inline text and this is <span class="ui inverted purple text">purple</span> inline text\n' +
      '          </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <h2 class="ui dividing header">Variations</h2>\n' +
      '    <div class="example">\n' +
      '      <h4 class="ui header">Size\n' +
      '        <div class="ui black label">New in 2.7.2</div>\n' +
      '      </h4>\n' +
      '      <p>Text can vary in the same sizes as icons</p>\n' +
      '        <div class="ui segment">\n' +
      '          <p>Starting with <span class="ui mini red text">mini</span> text</p>\n' +
      '          <p>which turns into <span class="ui tiny red text">tiny</span> text</p>\n' +
      '          <p>changing to <span class="ui small red text">small</span> text until it is</p>\n' +
      '          <p>the default <span class="ui medium red text">medium</span> text</p>\n' +
      '          <p>and could be <span class="ui large red text">large</span> text</p>\n' +
      '          <p>to turn into <span class="ui big red text">big</span> text</p>\n' +
      '          <p>then growing to <span class="ui huge red text">huge</span> text</p>\n' +
      '          <p>to finally become <span class="ui red massive text">massive</span> text</p>\n' +
      '        </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
