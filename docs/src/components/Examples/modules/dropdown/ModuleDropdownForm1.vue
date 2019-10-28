<template>
  <div>
      <div class="ui form segment">
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
        <div class="field">
          <label>Gender</label>
          <div class="ui dropdown selection">
            <input type="hidden" name="gender"/>
            <div class="default text">Select Gender</div>
            <i class="dropdown icon"/>
            <div class="menu">
              <div class="item" data-value="male">Male</div>
              <div class="item" data-value="female">Female</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownForm1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Coupling',
    title2: 'Form',
    description: 'A dropdown can be formatted to allow selection inside a',
    model: '      <div class="ui form segment">\n' +
      '        <div class="two fields">\n' +
      '          <div class="field">\n' +
      '            <label>First Name</label>\n' +
      '            <input placeholder="First Name" type="text"/>\n' +
      '          </div>\n' +
      '          <div class="field">\n' +
      '            <label>Last Name</label>\n' +
      '            <input placeholder="Last Name" type="text"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <label>Gender</label>\n' +
      '          <div class="ui dropdown selection">\n' +
      '            <input type="hidden" name="gender"/>\n' +
      '            <div class="default text">Select Gender</div>\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <div class="menu">\n' +
      '              <div class="item" data-value="male">Male</div>\n' +
      '              <div class="item" data-value="female">Female</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
