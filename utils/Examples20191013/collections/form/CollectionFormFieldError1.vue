<template>
  <div>
    <div class="ui form">
      <div class="two fields">
        <div class="field error">
          <label>First Name</label>
          <input placeholder="First Name" type="text"/>
        </div>
        <div class="field">
          <label>Last Name</label>
          <input placeholder="Last Name" type="text"/>
        </div>
      </div>
      <div class="field error">
        <label>Gender</label>
        <div class="ui selection dropdown">
          <div class="default text">Select</div>
          <i class="dropdown icon"/>
          <input type="hidden" name="gender"/>
          <div class="menu">
            <div class="item" data-value="male">Male</div>
            <div class="item" data-value="female">Female</div>
          </div>
        </div>
      </div>
      <div class="inline field error">
        <div class="ui checkbox">
          <input type="checkbox"/>
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormFieldError1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'States',
      title2: 'Field Error',
      description: 'Individual fields may display an error state',
      model: '    <div class="ui form">\n' +
      '      <div class="two fields">\n' +
      '        <div class="field error">\n' +
      '          <label>First Name</label>\n' +
      '          <input placeholder="First Name" type="text"/>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <label>Last Name</label>\n' +
      '          <input placeholder="Last Name" type="text"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="field error">\n' +
      '        <label>Gender</label>\n' +
      '        <div class="ui selection dropdown">\n' +
      '          <div class="default text">Select</div>\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <input type="hidden" name="gender"/>\n' +
      '          <div class="menu">\n' +
      '            <div class="item" data-value="male">Male</div>\n' +
      '            <div class="item" data-value="female">Female</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="inline field error">\n' +
      '        <div class="ui checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label>I agree to the Terms and Conditions</label>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
