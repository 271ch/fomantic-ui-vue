<template>
  <div>
      <div class="ui ignored info message">Any select element initialized as dropdown will also be hidden until Javascript can create HTML, this is to avoid the flash of unstyled content, and the change in element height adjusting page flow.</div>
      <div class="code" data-label="HTML" data-type="html">
        <div class="ui dropdown">
          <input type="hidden" name="gender"/>
          <i class="dropdown icon"/>
          <div class="default text">Gender</div>
          <div class="menu">
            <div class="item" data-value="male">Male</div>
            <div class="item" data-value="female">Female</div>
          </div>
        </div>
      </div>
      <div class="code" data-label="Javascript" data-type="javascript">
        $('.ui.dropdown')
          .dropdown()
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownInitializingExistingHTML1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Initializing',
    title2: 'Initializing Existing HTML',
    description: 'Initializing a dropdown with pre-existing HTML allows for greater performance than initializing a dropdown directly on a',
    model: '      <div class="ui ignored info message">Any select element initialized as dropdown will also be hidden until Javascript can create HTML, this is to avoid the flash of unstyled content, and the change in element height adjusting page flow.</div>\n' +
      '      <div class="code" data-label="HTML" data-type="html">\n' +
      '        <div class="ui dropdown">\n' +
      '          <input type="hidden" name="gender"/>\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="default text">Gender</div>\n' +
      '          <div class="menu">\n' +
      '            <div class="item" data-value="male">Male</div>\n' +
      '            <div class="item" data-value="female">Female</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-label="Javascript" data-type="javascript">\n' +
      '        $(\'.ui.dropdown\')\n' +
      '          .dropdown()\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
