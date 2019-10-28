<template>
  <div>
      <i class="large demo home circular link icon" data-title="Home" data-content="The place where you keep your dog"/> Home
      <div class="ui divider"/>
      <div class="ui selection dropdown">
        <input type="hidden" name="transition"/>
        <i class="dropdown icon"/>
        <div class="default text">Choose a transition</div>
        <div class="menu">
          <div class="item">Horizontal Flip</div>
          <div class="item">Vertical Flip</div>
          <div class="item">Fade Up</div>
          <div class="item">Fade</div>
          <div class="item">Scale</div>
        </div>
      </div>
      <div class="ui clearing divider"/>
      <div class="evaluated code">
    $('.selection')
      .dropdown({
        onChange: function(value) {
          $('.demo.icon')
            .popup({
              transition: value
            })
            .popup('toggle')
          ;
        }
      })
    ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupTransitions1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Examples',
    title2: 'Transitions',
    description: 'A popup can use any named ui transition.',
    model: '      <i class="large demo home circular link icon" data-title="Home" data-content="The place where you keep your dog"/> Home\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="ui selection dropdown">\n' +
      '        <input type="hidden" name="transition"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Choose a transition</div>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">Horizontal Flip</div>\n' +
      '          <div class="item">Vertical Flip</div>\n' +
      '          <div class="item">Fade Up</div>\n' +
      '          <div class="item">Fade</div>\n' +
      '          <div class="item">Scale</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui clearing divider"/>\n' +
      '      <div class="evaluated code">\n' +
      '    $(\'.selection\')\n' +
      '      .dropdown({\n' +
      '        onChange: function(value) {\n' +
      '          $(\'.demo.icon\')\n' +
      '            .popup({\n' +
      '              transition: value\n' +
      '            })\n' +
      '            .popup(\'toggle\')\n' +
      '          ;\n' +
      '        }\n' +
      '      })\n' +
      '    ;\n' +
      '      </div>\n',
  },
};
</script>
