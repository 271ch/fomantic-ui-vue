<template>
  <div>
      <div class="ui warning ignored message">
        Tooltips use an element's <code>:before</code> and <code>:after</code> pseudo classes. Elements like <code>icon</code> that already use these classes for styling will need to have the tooltips to a wrapping element, like a button, or a <code>span</code> to make sure tooltips work correctly.
      </div>
      <div class="ui icon button" data-tooltip="Add users to your feed">
        <i class="add icon"/>
      </div>
      <div class="ui icon button" data-tooltip="Add users to your feed" data-inverted="">
        <i class="add icon"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupTooltip1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: '???',
    title2: 'Tooltip',
    description: 'An element can specify a simple tooltip that can appear without javascript',
    model: '      <div class="ui warning ignored message">\n' +
      '        Tooltips use an element\'s <code>:before</code> and <code>:after</code> pseudo classes. Elements like <code>icon</code> that already use these classes for styling will need to have the tooltips to a wrapping element, like a button, or a <code>span</code> to make sure tooltips work correctly.\n' +
      '      </div>\n' +
      '      <div class="ui icon button" data-tooltip="Add users to your feed">\n' +
      '        <i class="add icon"/>\n' +
      '      </div>\n' +
      '      <div class="ui icon button" data-tooltip="Add users to your feed" data-inverted="">\n' +
      '        <i class="add icon"/>\n' +
      '      </div>\n',
  },
};
</script>
