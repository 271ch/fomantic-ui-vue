<template>
  <div>
    <div class="ui form">
      <div class="two fields">
        <div class="field">
          <label>First Name</label>
          <input placeholder="Read Only" readonly="readonly" type="text"/>
        </div>
        <div class="field">
          <label>Last Name</label>
          <input placeholder="Read Only" readonly="readonly" type="text"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormReadOnlyField1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'form',
    title1: 'States',
    title2: 'Read-Only Field',
    description: 'Individual fields may be read only',
    model: '    <div class="ui form">\n' +
      '      <div class="two fields">\n' +
      '        <div class="field">\n' +
      '          <label>First Name</label>\n' +
      '          <input placeholder="Read Only" readonly="readonly" type="text"/>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <label>Last Name</label>\n' +
      '          <input placeholder="Read Only" readonly="readonly" type="text"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
