<template>
  <div>
    <div class="ui form error">
      <div class="field">
        <label>E-mail</label>
        <input type="email" placeholder="joe@schmoe.com"/>
      </div>
      <div class="ui error message">
        <div class="header">Action Forbidden</div>
        <p>You can only sign up for an account once with a given e-mail address.</p>
      </div>
      <div class="ui submit button">Submit</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormError1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'form',
    title1: 'States',
    title2: 'Error',
    description: 'If a form is in an error state, it will automatically show any error message blocks.',
    model: '    <div class="ui form error">\n' +
      '      <div class="field">\n' +
      '        <label>E-mail</label>\n' +
      '        <input type="email" placeholder="joe@schmoe.com"/>\n' +
      '      </div>\n' +
      '      <div class="ui error message">\n' +
      '        <div class="header">Action Forbidden</div>\n' +
      '        <p>You can only sign up for an account once with a given e-mail address.</p>\n' +
      '      </div>\n' +
      '      <div class="ui submit button">Submit</div>\n' +
      '    </div>\n',
  },
};
</script>
