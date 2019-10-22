<template>
  <div>
    <FuiSegment placeholder>
      <FuiGrid column=two relaxed=very stackable>
        <FuiColumn>
          <FuiForm>
            <FuiField>
              <label>Username</label>
              <FuiInput placeholder="Username" icon=left>
                <FuiIcon name=user></FuiIcon>
              </FuiInput>
            </FuiField>
            <FuiField>
              <label>Password</label>
              <FuiInput type=password icon=left>
                <FuiIcon name=lock></FuiIcon>
              </FuiInput>
            </FuiField>
            <FuiButton tag=div color=blue submit>Login</FuiButton>
          </FuiForm>
        </FuiColumn>
        <FuiColumn aligned=middle>
          <FuiButton tag=div size=big>
            <FuiIcon name=signup></FuiIcon>
            Sign Up
          </FuiButton>
        </FuiColumn>
      </FuiGrid>
      <FuiDivider vertical>
        Or
      </FuiDivider>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerVerticalDivider2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'divider',
    title1: 'Types',
    title2: 'Vertical Divider',
    description: 'A divider can segment content vertically',
    model: '    <div class="ui placeholder segment">\n' +
      '      <div class="ui two column very relaxed stackable grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui form">\n' +
      '            <div class="field">\n' +
      '              <label>Username</label>\n' +
      '              <div class="ui left icon input">\n' +
      '                <input type="text" placeholder="Username">\n' +
      '                <i class="user icon"></i>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="field">\n' +
      '              <label>Password</label>\n' +
      '              <div class="ui left icon input">\n' +
      '                <input type="password">\n' +
      '                <i class="lock icon"></i>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="ui blue submit button">Login</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="middle aligned column">\n' +
      '          <div class="ui big button">\n' +
      '            <i class="signup icon"></i>\n' +
      '            Sign Up\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui vertical divider">\n' +
      '        Or\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
