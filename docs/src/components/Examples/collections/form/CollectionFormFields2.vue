<template>
  <div>
    <div class="ui form">
      <div class="three fields">
        <div class="field">
          <label>First name</label>
          <input type="text" placeholder="First Name"/>
        </div>
        <div class="field">
          <label>Middle name</label>
          <input type="text" placeholder="Middle Name"/>
        </div>
        <div class="field">
          <label>Last name</label>
          <input type="text" placeholder="Last Name"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormFields2',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'form',
    title1: 'Content',
    title2: 'Fields',
    description: 'A set of fields can appear grouped together',
    model: '    <div class="ui form">\n' +
      '      <div class="three fields">\n' +
      '        <div class="field">\n' +
      '          <label>First name</label>\n' +
      '          <input type="text" placeholder="First Name"/>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <label>Middle name</label>\n' +
      '          <input type="text" placeholder="Middle Name"/>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <label>Last name</label>\n' +
      '          <input type="text" placeholder="Last Name"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
