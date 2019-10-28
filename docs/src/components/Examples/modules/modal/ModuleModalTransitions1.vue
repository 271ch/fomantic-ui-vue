<template>
  <div>
      <div class="ui animation selection dropdown">
        <input type="hidden" name="transition"/>
        <div class="default text">Choose transition</div>
        <i class="dropdown icon"/>
        <div class="menu">
          <div class="item">Horizontal Flip</div>
          <div class="item">Vertical Flip</div>
          <div class="item">Fade Up</div>
          <div class="item">Fade</div>
          <div class="item">Scale</div>
        </div>
      </div>
      <div class="ui clearing divider"/>
      <div class="code">
      $('.selection.dropdown')
        .dropdown({
          onChange: function(value) {
            $('.test.modal')
              .modal('setting', 'transition', value)
              .modal('show')
            ;
          }
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalTransitions1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Examples',
    title2: 'Transitions',
    description: 'A modal can use any named ui transition.',
    model: '      <div class="ui animation selection dropdown">\n' +
      '        <input type="hidden" name="transition"/>\n' +
      '        <div class="default text">Choose transition</div>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">Horizontal Flip</div>\n' +
      '          <div class="item">Vertical Flip</div>\n' +
      '          <div class="item">Fade Up</div>\n' +
      '          <div class="item">Fade</div>\n' +
      '          <div class="item">Scale</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui clearing divider"/>\n' +
      '      <div class="code">\n' +
      '      $(\'.selection.dropdown\')\n' +
      '        .dropdown({\n' +
      '          onChange: function(value) {\n' +
      '            $(\'.test.modal\')\n' +
      '              .modal(\'setting\', \'transition\', value)\n' +
      '              .modal(\'show\')\n' +
      '            ;\n' +
      '          }\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
