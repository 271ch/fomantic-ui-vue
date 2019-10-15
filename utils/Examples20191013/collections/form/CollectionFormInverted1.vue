<template>
  <div>
    <div class="ui inverted segment">
      <div class="ui inverted form">
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
        <div class="inline field">
          <div class="ui checkbox">
            <input type="checkbox"/>
            <label>I agree to the terms and conditions</label>
          </div>
        </div>
        <div class="ui submit button">Submit</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormInverted1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'form',
    title1: 'Form Variations',
    title2: 'Inverted',
    description: 'A form on a dark background may have to invert its color scheme',
    model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui inverted form">\n' +
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
      '        <div class="inline field">\n' +
      '          <div class="ui checkbox">\n' +
      '            <input type="checkbox"/>\n' +
      '            <label>I agree to the terms and conditions</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="ui submit button">Submit</div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
