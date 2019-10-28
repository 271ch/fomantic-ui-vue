<template>
  <div>
      <div class="code" data-type="javascript">
        $('.button')
          .popup({
            popup: '.special.popup'
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupUsingaPreexistingPopupAnywhere1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Usage',
    title2: 'Using a Pre-existing Popup Anywhere',
    description: 'If you cannot include your popup element as a sibling element, you can specify a custom selector to retrieve your popup',
    model: '      <div class="code" data-type="javascript">\n' +
      '        $(\'.button\')\n' +
      '          .popup({\n' +
      '            popup: \'.special.popup\'\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
