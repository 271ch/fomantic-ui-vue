<template>
  <div>
    <FuiForm form fluid>
      <FuiField>
        <FuiFieldInput placeholder="First name"></FuiFieldInput>
        <FuiLabel pointing>
          Please enter a value
        </FuiLabel>
      </FuiField>
      <FuiDivider></FuiDivider>
      <FuiField placeholder="Last name">
        <FuiLabel pointing=below>
          Please enter a value
        </FuiLabel>
        <FuiFieldInput ></FuiFieldInput>
      </FuiField>
      <FuiDivider></FuiDivider>
      <FuiField inline>
        <FuiFieldInput placeholder="Username"></FuiFieldInput>
        <FuiLabel pointing=left>
          That name is taken!
        </FuiLabel>
      </FuiField>
      <FuiDivider></FuiDivider>
      <FuiField inline>
        <FuiLabel pointing=right>
          Your password must be 6 characters or more
        </FuiLabel>
        <FuiFieldInput type="password"></FuiFieldInput>
      </FuiField>
    </FuiForm>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelPointing1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Pointing',
    description: 'A label can point to content next to it',
    model: '    <form class="ui fluid form">\n' +
      '      <div class="field">\n' +
      '        <input type="text" placeholder="First name">\n' +
      '        <div class="ui pointing label">\n' +
      '          Please enter a value\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui divider"></div>\n' +
      '      <div class="field" placeholder="Last name">\n' +
      '        <div class="ui pointing below label">\n' +
      '          Please enter a value\n' +
      '        </div>\n' +
      '        <input type="text">\n' +
      '      </div>\n' +
      '      <div class="ui divider"></div>\n' +
      '      <div class="inline field">\n' +
      '        <input type="text" placeholder="Username">\n' +
      '        <div class="ui left pointing label">\n' +
      '          That name is taken!\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui divider"></div>\n' +
      '      <div class="inline field">\n' +
      '        <div class="ui right pointing label">\n' +
      '          Your password must be 6 characters or more\n' +
      '        </div>\n' +
      '        <input type="password">\n' +
      '      </div>\n' +
      '    </form>\n',
  },
};
</script>
