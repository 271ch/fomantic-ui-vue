<template>
  <div>
    <div class="ui form">
      <div class="inline field">
        <label>Last name</label>
        <input type="text" placeholder="Full Name"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormInlineField1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'form',
    title1: 'Field Variations',
    title2: 'Inline Field',
    description: 'A field can have its label next to instead of above it.',
    model: '    <div class="ui form">\n' +
      '      <div class="inline field">\n' +
      '        <label>Last name</label>\n' +
      '        <input type="text" placeholder="Full Name"/>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
