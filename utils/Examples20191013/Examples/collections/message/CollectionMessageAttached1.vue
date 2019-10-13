<template>
  <div>
    <div class="ui attached message">
      <div class="header">
        Welcome to our site!
      </div>
      <p>Fill out the form below to sign-up for a new account</p>
    </div>
    <form class="ui form attached fluid segment">
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
        <label>Username</label>
        <input placeholder="Username" type="text"/>
      </div>
      <div class="field">
        <label>Password</label>
        <input type="password"/>
      </div>
      <div class="inline field">
        <div class="ui checkbox">
          <input type="checkbox" id="terms"/>
          <label for="terms">I agree to the terms and conditions</label>
        </div>
      </div>
      <div class="ui blue submit button">Submit</div>
    </form>
    <div class="ui bottom attached warning message">
      <i class="icon help"/>
      Already signed up? <a href="#">Login here</a> instead.
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageAttached1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'message',
      title1: 'Variations',
      title2: 'Attached',
      description: 'A message can be formatted to attach itself to other content',
      model: '    <div class="ui attached message">\n' +
      '      <div class="header">\n' +
      '        Welcome to our site!\n' +
      '      </div>\n' +
      '      <p>Fill out the form below to sign-up for a new account</p>\n' +
      '    </div>\n' +
      '    <form class="ui form attached fluid segment">\n' +
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
      '      <div class="field">\n' +
      '        <label>Username</label>\n' +
      '        <input placeholder="Username" type="text"/>\n' +
      '      </div>\n' +
      '      <div class="field">\n' +
      '        <label>Password</label>\n' +
      '        <input type="password"/>\n' +
      '      </div>\n' +
      '      <div class="inline field">\n' +
      '        <div class="ui checkbox">\n' +
      '          <input type="checkbox" id="terms"/>\n' +
      '          <label for="terms">I agree to the terms and conditions</label>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui blue submit button">Submit</div>\n' +
      '    </form>\n' +
      '    <div class="ui bottom attached warning message">\n' +
      '      <i class="icon help"/>\n' +
      '      Already signed up? <a href="#">Login here</a> instead.\n' +
      '    </div>\n',
    };
  },
};
</script>
