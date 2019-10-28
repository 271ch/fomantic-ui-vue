<template>
  <div>
      <div class="ui calendar" id="no_ampm">
        <div class="ui input left icon">
          <i class="time icon"/>
          <input type="text" placeholder="Time"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#no_ampm')
        .calendar({
          type: 'time',
          ampm: false
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendar24hourformat1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: '24 hour format',
    description: 'You can get rid of the AM/PM stuff',
    model: '      <div class="ui calendar" id="no_ampm">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="time icon"/>\n' +
      '          <input type="text" placeholder="Time"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#no_ampm\')\n' +
      '        .calendar({\n' +
      '          type: \'time\',\n' +
      '          ampm: false\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
