<template>
  <div>
      <i class="circular heart icon link" data-content="Hello. This is an inverted popup" data-variation="inverted"/>
      <div class="ui icon button" data-tooltip="Hello. This is an inverted popup" data-position="top left" data-inverted="">
        <i class="add icon"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupInverted1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A popup can have its colors inverted',
    model: '      <i class="circular heart icon link" data-content="Hello. This is an inverted popup" data-variation="inverted"/>\n' +
      '      <div class="ui icon button" data-tooltip="Hello. This is an inverted popup" data-position="top left" data-inverted="">\n' +
      '        <i class="add icon"/>\n' +
      '      </div>\n',
  },
};
</script>
