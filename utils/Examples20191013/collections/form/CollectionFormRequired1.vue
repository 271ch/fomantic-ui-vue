<template>
  <div>
    <div class="ui form">
      <div class="required field">
        <label>Last name</label>
        <input type="text" placeholder="Full Name"/>
      </div>
      <div class="required inline field">
        <div class="ui checkbox">
          <input type="checkbox"/>
          <label>I agree to the terms and conditions</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormRequired1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Field Variations',
      title2: 'Required',
      description: 'A field can show that input is mandatory',
      model: '    <div class="ui form">\n' +
      '      <div class="required field">\n' +
      '        <label>Last name</label>\n' +
      '        <input type="text" placeholder="Full Name"/>\n' +
      '      </div>\n' +
      '      <div class="required inline field">\n' +
      '        <div class="ui checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label>I agree to the terms and conditions</label>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
