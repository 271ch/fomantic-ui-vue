<template>
  <div>
    <div class="ignored ui warning message">
      For backward-compatibility during v2.x, <code>close</code>/<code>delete</code> icon.
      <ul>
        <li>Requires <code>left icon</code> to be added to the parent <code>label</code> when the icon is placed on the left of a label.</li>
        <li>Does not require <code>right icon</code> to be added to parent <code>label</code> when the icon is placed on the right of the label.</li>
      </ul>
      This rule may be simplified in a later minor or major version.
    </div>
    <div class="ui left icon label">
      <i class="close icon"></i>
      Close
    </div>
    <div class="ui left icon label">
      <i class="delete icon"></i>
      Delete
    </div>
    <div class="ui label">
      Close
      <i class="close icon"></i>
    </div>
    <div class="ui label">
      Delete
      <i class="delete icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelIcon4',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'label',
    title1: 'Content',
    title2: 'Icon',
    description: 'A label can include an icon',
    model: '    <div class="ignored ui warning message">\n' +
      '      For backward-compatibility during v2.x, <code>close</code>/<code>delete</code> icon.\n' +
      '      <ul>\n' +
      '        <li>Requires <code>left icon</code> to be added to the parent <code>label</code> when the icon is placed on the left of a label.</li>\n' +
      '        <li>Does not require <code>right icon</code> to be added to parent <code>label</code> when the icon is placed on the right of the label.</li>\n' +
      '      </ul>\n' +
      '      This rule may be simplified in a later minor or major version.\n' +
      '    </div>\n' +
      '    <div class="ui left icon label">\n' +
      '      <i class="close icon"></i>\n' +
      '      Close\n' +
      '    </div>\n' +
      '    <div class="ui left icon label">\n' +
      '      <i class="delete icon"></i>\n' +
      '      Delete\n' +
      '    </div>\n' +
      '    <div class="ui label">\n' +
      '      Close\n' +
      '      <i class="close icon"></i>\n' +
      '    </div>\n' +
      '    <div class="ui label">\n' +
      '      Delete\n' +
      '      <i class="delete icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
