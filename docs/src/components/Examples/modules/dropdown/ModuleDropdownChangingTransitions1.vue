<template>
  <div>
      <div class="code" data-type="javascript">
      $('.dropdown')
        .dropdown({
          // you can use any ui transition
          transition: 'drop'
        })
      ;
      </div>
      <div class="ui teal buttons">
        <div class="ui button">Toggle</div>
        <div class="ui floating dropdown icon button">
          <i class="dropdown icon"/>
          <div class="menu">
            <div class="item" data-value="drop">Drop</div>
            <div class="item" data-value="horizontal flip">Horizontal Flip</div>
            <div class="item" data-value="fade up">Fade Up</div>
            <div class="item" data-value="scale">Scale</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownChangingTransitions1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Menus',
    title2: 'Changing Transitions',
    description: 'A dropdown can specify a different',
    model: '      <div class="code" data-type="javascript">\n' +
      '      $(\'.dropdown\')\n' +
      '        .dropdown({\n' +
      '          // you can use any ui transition\n' +
      '          transition: \'drop\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui teal buttons">\n' +
      '        <div class="ui button">Toggle</div>\n' +
      '        <div class="ui floating dropdown icon button">\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="menu">\n' +
      '            <div class="item" data-value="drop">Drop</div>\n' +
      '            <div class="item" data-value="horizontal flip">Horizontal Flip</div>\n' +
      '            <div class="item" data-value="fade up">Fade Up</div>\n' +
      '            <div class="item" data-value="scale">Scale</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
