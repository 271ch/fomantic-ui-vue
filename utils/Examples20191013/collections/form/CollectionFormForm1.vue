<template>
  <div>
    <div class="ui ignored warning message">
      <p>If you are looking for validation you should check out <a href="/behaviors/form.html">form behaviors</a>.</p>
    </div>
    <form class="ui form">
      <div class="field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name"/>
      </div>
      <div class="field">
        <label>Last Name</label>
        <input type="text" name="last-name" placeholder="Last Name"/>
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox"/>
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button class="ui button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormForm1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Types',
      title2: 'Form',
      description: 'A form',
      model: '    <div class="ui ignored warning message">\n' +
      '      <p>If you are looking for validation you should check out <a href="/behaviors/form.html">form behaviors</a>.</p>\n' +
      '    </div>\n' +
      '    <form class="ui form">\n' +
      '      <div class="field">\n' +
      '        <label>First Name</label>\n' +
      '        <input type="text" name="first-name" placeholder="First Name"/>\n' +
      '      </div>\n' +
      '      <div class="field">\n' +
      '        <label>Last Name</label>\n' +
      '        <input type="text" name="last-name" placeholder="Last Name"/>\n' +
      '      </div>\n' +
      '      <div class="field">\n' +
      '        <div class="ui checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label>I agree to the Terms and Conditions</label>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <button class="ui button" type="submit">Submit</button>\n' +
      '    </form>\n',
    };
  },
};
</script>
