<template>
  <div>
    <div class="ui small form">
      <div class="two fields">
        <div class="field">
          <label>First Name</label>
          <input placeholder="First Name" type="text"/>
        </div>
        <div class="field">
          <label>Last Name</label>
          <input placeholder="Last Name" type="text"/>
        </div>
      </div>
      <div class="ui submit button">Submit</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormSize3',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Form Variations',
      title2: 'Size',
      description: 'A form can vary in size',
      model: '    <div class="ui small form">\n' +
      '      <div class="two fields">\n' +
      '        <div class="field">\n' +
      '          <label>First Name</label>\n' +
      '          <input placeholder="First Name" type="text"/>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <label>Last Name</label>\n' +
      '          <input placeholder="Last Name" type="text"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui submit button">Submit</div>\n' +
      '    </div>\n',
    };
  },
};
</script>
