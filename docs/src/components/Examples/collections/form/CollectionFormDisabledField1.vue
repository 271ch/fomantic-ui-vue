<template>
  <div>
    <div class="ui form">
      <div class="two fields">
        <div class="disabled field">
          <label>First Name</label>
          <input placeholder="Read Only" type="text" disabled="disabled" tabindex="-1"/>
        </div>
        <div class="disabled field">
          <label>Last Name</label>
          <input placeholder="Disabled" type="text" disabled="disabled" tabindex="-1"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormDisabledField1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'States',
      title2: 'Disabled Field',
      description: 'Individual fields may be disabled',
      model: '    <div class="ui form">\n' +
      '      <div class="two fields">\n' +
      '        <div class="disabled field">\n' +
      '          <label>First Name</label>\n' +
      '          <input placeholder="Read Only" type="text" disabled="disabled" tabindex="-1"/>\n' +
      '        </div>\n' +
      '        <div class="disabled field">\n' +
      '          <label>Last Name</label>\n' +
      '          <input placeholder="Disabled" type="text" disabled="disabled" tabindex="-1"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
