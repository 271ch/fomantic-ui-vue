<template>
  <div>
    <form class="ui fluid form">
      <div class="field">
        <input type="text" placeholder="First name"/>
        <div class="ui pointing label">
          Please enter a value
        </div>
      </div>
      <div class="ui divider"/>
      <div class="field" placeholder="Last Name">
        <div class="ui pointing below label">
          Please enter a value
        </div>
        <input type="text"/>
      </div>
      <div class="ui divider"/>
      <div class="inline field">
        <input type="text" placeholder="Username"/>
        <div class="ui left pointing label">
          That name is taken!
        </div>
      </div>
      <div class="ui divider"/>
      <div class="inline field">
        <div class="ui right pointing label">
          Your password must be 6 characters or more
        </div>
        <input type="password"/>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelPointing1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Types',
      title2: 'Pointing',
      description: 'A label can point to content next to it',
      model: '    <form class="ui fluid form">\n' +
      '      <div class="field">\n' +
      '        <input type="text" placeholder="First name"/>\n' +
      '        <div class="ui pointing label">\n' +
      '          Please enter a value\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="field" placeholder="Last Name">\n' +
      '        <div class="ui pointing below label">\n' +
      '          Please enter a value\n' +
      '        </div>\n' +
      '        <input type="text"/>\n' +
      '      </div>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="inline field">\n' +
      '        <input type="text" placeholder="Username"/>\n' +
      '        <div class="ui left pointing label">\n' +
      '          That name is taken!\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="inline field">\n' +
      '        <div class="ui right pointing label">\n' +
      '          Your password must be 6 characters or more\n' +
      '        </div>\n' +
      '        <input type="password"/>\n' +
      '      </div>\n' +
      '    </form>\n',
    };
  },
};
</script>
