<template>
  <div>
    <div class="ui form warning">
      <div class="field">
        <label>E-mail</label>
        <input type="email" placeholder="joe@schmoe.com"/>
      </div>
      <div class="ui warning message">
        <div class="header">Could you check something!</div>
        <ul class="list">
          <li>That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.</li>
        </ul>
      </div>
      <div class="ui submit button">Submit</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormWarning1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'States',
      title2: 'Warning',
      description: 'If a form is in warning state, it will automatically show any warning message block.',
      model: '    <div class="ui form warning">\n' +
      '      <div class="field">\n' +
      '        <label>E-mail</label>\n' +
      '        <input type="email" placeholder="joe@schmoe.com"/>\n' +
      '      </div>\n' +
      '      <div class="ui warning message">\n' +
      '        <div class="header">Could you check something!</div>\n' +
      '        <ul class="list">\n' +
      '          <li>That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.</li>\n' +
      '        </ul>\n' +
      '      </div>\n' +
      '      <div class="ui submit button">Submit</div>\n' +
      '    </div>\n',
    };
  },
};
</script>
