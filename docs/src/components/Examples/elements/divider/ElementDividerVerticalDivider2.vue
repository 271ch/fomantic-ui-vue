<template>
  <div>
    <div class="ui info ignored message">
      A vertical divider will automatically swap to a horizontal divider at mobile resolutions when used inside a <a href="/collections/grid.html#stackable-grid"><code>stackable grid</code></a>
    </div>
    <div class="ui placeholder segment">
      <div class="ui two column very relaxed stackable grid">
        <div class="column">
          <div class="ui form">
            <div class="field">
              <label>Username</label>
              <div class="ui left icon input">
                <input type="text" placeholder="Username"/>
                <i class="user icon"/>
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui left icon input">
                <input type="password"/>
                <i class="lock icon"/>
              </div>
            </div>
            <div class="ui blue submit button">Login</div>
          </div>
        </div>
        <div class="middle aligned column">
          <div class="ui big button">
            <i class="signup icon"/>
            Sign Up
          </div>
        </div>
      </div>
      <div class="ui vertical divider">
        Or
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerVerticalDivider2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'divider',
      title1: 'Types',
      title2: 'Vertical Divider',
      description: 'A divider can segment content vertically',
      model: '    <div class="ui info ignored message">\n' +
      '      A vertical divider will automatically swap to a horizontal divider at mobile resolutions when used inside a <a href="/collections/grid.html#stackable-grid"><code>stackable grid</code></a>\n' +
      '    </div>\n' +
      '    <div class="ui placeholder segment">\n' +
      '      <div class="ui two column very relaxed stackable grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui form">\n' +
      '            <div class="field">\n' +
      '              <label>Username</label>\n' +
      '              <div class="ui left icon input">\n' +
      '                <input type="text" placeholder="Username"/>\n' +
      '                <i class="user icon"/>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="field">\n' +
      '              <label>Password</label>\n' +
      '              <div class="ui left icon input">\n' +
      '                <input type="password"/>\n' +
      '                <i class="lock icon"/>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="ui blue submit button">Login</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="middle aligned column">\n' +
      '          <div class="ui big button">\n' +
      '            <i class="signup icon"/>\n' +
      '            Sign Up\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui vertical divider">\n' +
      '        Or\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
