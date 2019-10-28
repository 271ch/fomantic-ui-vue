<template>
  <div>
      <div class="ui ignored positive message">
        Using inline will allow your popups to go places other popups can't go, like inside <code>fixed</code> or <code>absolutely</code> positioned elements
      </div>
      <div class="ui ignored info message">
        If you want to style each popup individually it makes sense to keep popup <code>inline: true</code>. If you are worried that your pop up might mistakingly inherit styles that it shouldn't, you should set <code>inline: false</code>.
      </div>
      <div class="code" data-type="css">
      /* this will only style the popup if inline is true */
      .example .popup {
        color: #FF0000;
      }
      </div>
      <div class="evaluated code">
      $('.inline.icon')
        .popup({
          inline: true
        })
      ;
      </div>
      <i class="heart circular icon link" data-content="This is a child element to the page's body and will not be styled"/>
      <i class="mail inline circular icon link" data-content="This popup was inserted inline and will be styled"/>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupInlineorrelativetopage1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Examples',
    title2: 'Inline or relative to page',
    description: 'A popup can either be inserted directly after an element, or added as a child element to the page\'s',
    model: '      <div class="ui ignored positive message">\n' +
      '        Using inline will allow your popups to go places other popups can\'t go, like inside <code>fixed</code> or <code>absolutely</code> positioned elements\n' +
      '      </div>\n' +
      '      <div class="ui ignored info message">\n' +
      '        If you want to style each popup individually it makes sense to keep popup <code>inline: true</code>. If you are worried that your pop up might mistakingly inherit styles that it shouldn\'t, you should set <code>inline: false</code>.\n' +
      '      </div>\n' +
      '      <div class="code" data-type="css">\n' +
      '      /* this will only style the popup if inline is true */\n' +
      '      .example .popup {\n' +
      '        color: #FF0000;\n' +
      '      }\n' +
      '      </div>\n' +
      '      <div class="evaluated code">\n' +
      '      $(\'.inline.icon\')\n' +
      '        .popup({\n' +
      '          inline: true\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <i class="heart circular icon link" data-content="This is a child element to the page\'s body and will not be styled"/>\n' +
      '      <i class="mail inline circular icon link" data-content="This popup was inserted inline and will be styled"/>\n',
  },
};
</script>
