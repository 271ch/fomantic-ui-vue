<template>
  <div>
      <div class="ui checkbox">
        <input type="checkbox" name="example"/>
        <label>Maybe this will work</label>
      </div>
      <div class="evaluated code" data-type="javascript">
        $('.cancel.example .ui.checkbox')
          .checkbox({
            beforeChecked: function() {
              var
                luckyPerson = (Math.random() &lt; 0.5)
              ;
              return luckyPerson;
            }
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxCheckingConditions1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Examples',
    title2: 'Checking Conditions',
    description: '???',
    model: '      <div class="ui checkbox">\n' +
      '        <input type="checkbox" name="example"/>\n' +
      '        <label>Maybe this will work</label>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.cancel.example .ui.checkbox\')\n' +
      '          .checkbox({\n' +
      '            beforeChecked: function() {\n' +
      '              var\n' +
      '                luckyPerson = (Math.random() &lt; 0.5)\n' +
      '              ;\n' +
      '              return luckyPerson;\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
