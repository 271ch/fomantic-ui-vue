<template>
  <div>
    <div class="ui form">
      <div class="inline fields">
        <label>Phone Number</label>
        <div class="field">
          <input type="text" placeholder="(xxx)"/>
        </div>
        <div class="field">
          <input type="text" placeholder="xxx"/>
        </div>
        <div class="field">
          <input type="text" placeholder="xxxx"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormInlineFields1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Group Variations',
      title2: 'Inline Fields',
      description: 'Multiple fields may be inline in a row',
      model: '    <div class="ui form">\n' +
      '      <div class="inline fields">\n' +
      '        <label>Phone Number</label>\n' +
      '        <div class="field">\n' +
      '          <input type="text" placeholder="(xxx)"/>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <input type="text" placeholder="xxx"/>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <input type="text" placeholder="xxxx"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
