<template>
  <div>
    <FuiSegment placeholder>
      <FuiGrid column=two relaxed=very stackable>
        <FuiColumn>
          <div class="ui form">
            <div class="field">
              <label>Username</label>
              <div class="ui left icon input">
                <input type="text" placeholder="Username"/>
                <FuiIcon name=user></FuiIcon>
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui left icon input">
                <input type="password"/>
                <FuiIcon name=lock></FuiIcon>
              </div>
            </div>
            <div class="ui blue submit button">Login</div>
          </div>
        </FuiColumn>
        <FuiColumn middle aligned>
          <FuiButton size=big>
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
    converted: false,
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
      '                <input type="text" placeholder="Username"/>\n' +
      '                <i class="user icon"></i>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="field">\n' +
      '              <label>Password</label>\n' +
      '              <div class="ui left icon input">\n' +
      '                <input type="password"/>\n' +
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
