<template>
  <div>
      <table class="ui celled definition table">
        <thead>
          <tr>
            <th/>
            <th>Multiple Visible <i class="help circle link icon" data-content="Whether multiple sidebars of this type can be visible at same time"/></th>
            <th>Supports Vertical Sidebars</th>
            <th>Supports Horizontal Sidebars</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Overlay</td>
            <td><i class="green check icon"/></td>
            <td><i class="green check icon"/></td>
            <td><i class="green check icon"/></td>
          </tr>
          <tr>
            <td>Push</td>
            <td><i class="green check icon"/></td>
            <td><i class="green check icon"/></td>
            <td><i class="green check icon"/></td>
          </tr>
          <tr>
            <td>Scale Down</td>
            <td><i class="green check icon"/></td>
            <td><i class="green check icon"/></td>
            <td><i class="red cancel icon"/></td>
          </tr>
          <tr>
            <td>Uncover</td>
            <td><i class="red cancel icon"/></td>
            <td><i class="green check icon"/></td>
            <td><i class="red cancel icon"/></td>
          </tr>
          <tr>
            <td>Slide Along</td>
            <td><i class="red cancel icon"/></td>
            <td><i class="green check icon"/></td>
            <td><i class="red cancel icon"/></td>
          </tr>
          <tr>
            <td>Slide Out</td>
            <td><i class="red cancel icon"/></td>
            <td><i class="green check icon"/></td>
            <td><i class="red cancel icon"/></td>
          </tr>
        </tbody>
      </table>
      <div class="ui toggle dim checkbox">
        <input type="checkbox" name="dim"/>
        <label>Dim Page</label>
      </div>
      <div class="ui hidden divider"/>
      <h5 class="ui header">Direction</h5>
      <div class="ui buttons">
        <div class="ui button" data-direction="left">
          Left
        </div>
        <div class="ui active button" data-direction="right">
          Right
        </div>
        <div class="ui button" data-direction="top">
          Top
        </div>
        <div class="ui button" data-direction="bottom">
          Bottom
        </div>
      </div>
      <div class="ui hidden divider"/>
      <h5 class="ui header">All Direction Animations</h5>
      <div class="ui button" data-transition="overlay">
        Overlay
      </div>
      <div class="ui button" data-transition="push">
        Push
      </div>
      <div class="ui button" data-transition="scale down">
        Scale Down
      </div>
      <h5 class="ui header">Vertical-Only Animations</h5>
      <div class="ui horizontal button" data-transition="uncover">
        Uncover
      </div>
      <div class="ui horizontal button" data-transition="slide along">
        Slide Along
      </div>
      <div class="ui horizontal button" data-transition="slide out">
        Slide Out
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSidebarTransitions1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Examples',
    title2: 'Transitions',
    description: 'Not all sidebar transitions are available for every sidebar direction, or when multiple sidebars are visible at a time.',
    model: '      <table class="ui celled definition table">\n' +
      '        <thead>\n' +
      '          <tr>\n' +
      '            <th/>\n' +
      '            <th>Multiple Visible <i class="help circle link icon" data-content="Whether multiple sidebars of this type can be visible at same time"/></th>\n' +
      '            <th>Supports Vertical Sidebars</th>\n' +
      '            <th>Supports Horizontal Sidebars</th>\n' +
      '          </tr>\n' +
      '        </thead>\n' +
      '        <tbody>\n' +
      '          <tr>\n' +
      '            <td>Overlay</td>\n' +
      '            <td><i class="green check icon"/></td>\n' +
      '            <td><i class="green check icon"/></td>\n' +
      '            <td><i class="green check icon"/></td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>Push</td>\n' +
      '            <td><i class="green check icon"/></td>\n' +
      '            <td><i class="green check icon"/></td>\n' +
      '            <td><i class="green check icon"/></td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>Scale Down</td>\n' +
      '            <td><i class="green check icon"/></td>\n' +
      '            <td><i class="green check icon"/></td>\n' +
      '            <td><i class="red cancel icon"/></td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>Uncover</td>\n' +
      '            <td><i class="red cancel icon"/></td>\n' +
      '            <td><i class="green check icon"/></td>\n' +
      '            <td><i class="red cancel icon"/></td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>Slide Along</td>\n' +
      '            <td><i class="red cancel icon"/></td>\n' +
      '            <td><i class="green check icon"/></td>\n' +
      '            <td><i class="red cancel icon"/></td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>Slide Out</td>\n' +
      '            <td><i class="red cancel icon"/></td>\n' +
      '            <td><i class="green check icon"/></td>\n' +
      '            <td><i class="red cancel icon"/></td>\n' +
      '          </tr>\n' +
      '        </tbody>\n' +
      '      </table>\n' +
      '      <div class="ui toggle dim checkbox">\n' +
      '        <input type="checkbox" name="dim"/>\n' +
      '        <label>Dim Page</label>\n' +
      '      </div>\n' +
      '      <div class="ui hidden divider"/>\n' +
      '      <h5 class="ui header">Direction</h5>\n' +
      '      <div class="ui buttons">\n' +
      '        <div class="ui button" data-direction="left">\n' +
      '          Left\n' +
      '        </div>\n' +
      '        <div class="ui active button" data-direction="right">\n' +
      '          Right\n' +
      '        </div>\n' +
      '        <div class="ui button" data-direction="top">\n' +
      '          Top\n' +
      '        </div>\n' +
      '        <div class="ui button" data-direction="bottom">\n' +
      '          Bottom\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui hidden divider"/>\n' +
      '      <h5 class="ui header">All Direction Animations</h5>\n' +
      '      <div class="ui button" data-transition="overlay">\n' +
      '        Overlay\n' +
      '      </div>\n' +
      '      <div class="ui button" data-transition="push">\n' +
      '        Push\n' +
      '      </div>\n' +
      '      <div class="ui button" data-transition="scale down">\n' +
      '        Scale Down\n' +
      '      </div>\n' +
      '      <h5 class="ui header">Vertical-Only Animations</h5>\n' +
      '      <div class="ui horizontal button" data-transition="uncover">\n' +
      '        Uncover\n' +
      '      </div>\n' +
      '      <div class="ui horizontal button" data-transition="slide along">\n' +
      '        Slide Along\n' +
      '      </div>\n' +
      '      <div class="ui horizontal button" data-transition="slide out">\n' +
      '        Slide Out\n' +
      '      </div>\n',
  },
};
</script>
