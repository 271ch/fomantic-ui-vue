<template>
  <div>
    <div class="ui form">
      <div class="inline fields">
        <div class="eight wide field">
          <label>Name</label>
          <input type="text" placeholder="First Name"/>
        </div>
        <div class="three wide field">
          <input type="text" placeholder="Middle Name"/>
        </div>
        <div class="five wide field">
          <input type="text" placeholder="Last Name"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormFields3',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'form',
    title1: 'Content',
    title2: 'Fields',
    description: 'A set of fields can appear grouped together',
    model: '    <div class="ui form">\n' +
      '      <div class="inline fields">\n' +
      '        <div class="eight wide field">\n' +
      '          <label>Name</label>\n' +
      '          <input type="text" placeholder="First Name"/>\n' +
      '        </div>\n' +
      '        <div class="three wide field">\n' +
      '          <input type="text" placeholder="Middle Name"/>\n' +
      '        </div>\n' +
      '        <div class="five wide field">\n' +
      '          <input type="text" placeholder="Last Name"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
