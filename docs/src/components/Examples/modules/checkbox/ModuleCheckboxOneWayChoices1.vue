<template>
  <div>
      <div class="evaluated code" data-type="javascript">
        $('.state.example .checkbox')
          .last()
          .checkbox({
            uncheckable: false
          })
        ;
      </div>
      <div class="ui form">
        <div class="field">
          <div class="ui checkbox" id="demo1">
            <input type="checkbox" disabled="disabled" checked="checked"/>
            <label>Disabled</label>
          </div>
        </div>
        <div class="field">
          <div class="ui read-only checkbox" id="demo2">
            <input type="checkbox" checked="checked"/>
            <label>Read-only</label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox" id="demo3">
            <input type="checkbox"/>
            <label>Uncheckable</label>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxOneWayChoices1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Examples',
    title2: 'One-Way Choices',
    description: '???',
    model: '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.state.example .checkbox\')\n' +
      '          .last()\n' +
      '          .checkbox({\n' +
      '            uncheckable: false\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="ui form">\n' +
      '        <div class="field">\n' +
      '          <div class="ui checkbox" id="demo1">\n' +
      '            <input type="checkbox" disabled="disabled" checked="checked"/>\n' +
      '            <label>Disabled</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <div class="ui read-only checkbox" id="demo2">\n' +
      '            <input type="checkbox" checked="checked"/>\n' +
      '            <label>Read-only</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <div class="ui checkbox" id="demo3">\n' +
      '            <input type="checkbox"/>\n' +
      '            <label>Uncheckable</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
