<template>
  <div>
      <div class="ui warning ignored message">
        Using an <code>inline</code> popup may require specifying a <code>min-width</code> on your popup, if your popup content will appear outside the boundaries of its parent element.
      </div>
      <div class="evaluated code">
      $('.example .custom.button')
        .popup({
          popup : $('.custom.popup'),
          on    : 'click'
        })
      ;
      </div>
      <div class="some-wrapping-div">
        <div class="ui custom button">Show custom popup</div>
      </div>
      <div class="ui custom popup">
        I'm not on the same level as the button, but i can still be found.
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupSpecifyingaselectorforapopup1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Examples',
    title2: 'Specifying a selector for a popup',
    description: 'If its not possible to include the popup content as the next sibling, you can also specify a custom selector to help link the popup contents to its activator.',
    model: '      <div class="ui warning ignored message">\n' +
      '        Using an <code>inline</code> popup may require specifying a <code>min-width</code> on your popup, if your popup content will appear outside the boundaries of its parent element.\n' +
      '      </div>\n' +
      '      <div class="evaluated code">\n' +
      '      $(\'.example .custom.button\')\n' +
      '        .popup({\n' +
      '          popup : $(\'.custom.popup\'),\n' +
      '          on    : \'click\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="some-wrapping-div">\n' +
      '        <div class="ui custom button">Show custom popup</div>\n' +
      '      </div>\n' +
      '      <div class="ui custom popup">\n' +
      '        I\'m not on the same level as the button, but i can still be found.\n' +
      '      </div>\n',
  },
};
</script>
