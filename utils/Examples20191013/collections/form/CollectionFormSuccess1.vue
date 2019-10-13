<template>
  <div>
    <div class="ui form success">
      <div class="field">
        <label>E-mail</label>
        <input type="email" placeholder="joe@schmoe.com"/>
      </div>
      <div class="ui success message">
        <div class="header">Form Completed</div>
        <p>You're all signed up for the newsletter.</p>
      </div>
      <div class="ui submit button">Submit</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormSuccess1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'States',
      title2: 'Success',
      description: 'If a form is in an success state, it will automatically show any success message blocks.',
      model: '    <div class="ui form success">\n' +
      '      <div class="field">\n' +
      '        <label>E-mail</label>\n' +
      '        <input type="email" placeholder="joe@schmoe.com"/>\n' +
      '      </div>\n' +
      '      <div class="ui success message">\n' +
      '        <div class="header">Form Completed</div>\n' +
      '        <p>You\'re all signed up for the newsletter.</p>\n' +
      '      </div>\n' +
      '      <div class="ui submit button">Submit</div>\n' +
      '    </div>\n',
    };
  },
};
</script>
