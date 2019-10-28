<template>
  <div>
      <div class="ui segment">
        <div class="ui fluid form">
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
          <div class="ui accordion field">
            <div class="title">
              <i class="icon dropdown"/>
              Optional Details
            </div>
            <div class="content field">
              <label>Maiden Name</label>
              <input placeholder="Maiden Name" type="text"/>
            </div>
          </div>
          <div class="ui secondary submit button">Sign Up</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleAccordionFormFields1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'accordion',
    title1: 'Examples',
    title2: 'Form Fields',
    description: 'An accordion can be used anywhere where content can be shown or hidden. For example, to show optional form fields.',
    model: '      <div class="ui segment">\n' +
      '        <div class="ui fluid form">\n' +
      '          <div class="two fields">\n' +
      '            <div class="field">\n' +
      '              <label>First Name</label>\n' +
      '              <input placeholder="First Name" type="text"/>\n' +
      '            </div>\n' +
      '            <div class="field">\n' +
      '              <label>Last Name</label>\n' +
      '              <input placeholder="Last Name" type="text"/>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="ui accordion field">\n' +
      '            <div class="title">\n' +
      '              <i class="icon dropdown"/>\n' +
      '              Optional Details\n' +
      '            </div>\n' +
      '            <div class="content field">\n' +
      '              <label>Maiden Name</label>\n' +
      '              <input placeholder="Maiden Name" type="text"/>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="ui secondary submit button">Sign Up</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
