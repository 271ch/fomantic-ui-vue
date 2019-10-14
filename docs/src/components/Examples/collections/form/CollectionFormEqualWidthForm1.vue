<template>
  <div>
    <div class="ui equal width form">
      <div class="fields">
        <div class="field">
          <label>Username</label>
          <input type="text" placeholder="Username"/>
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password"/>
        </div>
      </div>
      <div class="fields">
        <div class="field">
          <label>First name</label>
          <input type="text" placeholder="First Name"/>
        </div>
        <div class="field">
          <label>Middle name</label>
          <input type="text" placeholder="Middle Name"/>
        </div>
        <div class="field">
          <label>Last name</label>
          <input type="text" placeholder="Last Name"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormEqualWidthForm1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'form',
    title1: 'Form Variations',
    title2: 'Equal Width Form',
    description: 'Forms can automatically divide fields to be equal width',
    model: '    <div class="ui equal width form">\n' +
      '      <div class="fields">\n' +
      '        <div class="field">\n' +
      '          <label>Username</label>\n' +
      '          <input type="text" placeholder="Username"/>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <label>Password</label>\n' +
      '          <input type="password"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="fields">\n' +
      '        <div class="field">\n' +
      '          <label>First name</label>\n' +
      '          <input type="text" placeholder="First Name"/>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <label>Middle name</label>\n' +
      '          <input type="text" placeholder="Middle Name"/>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <label>Last name</label>\n' +
      '          <input type="text" placeholder="Last Name"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
