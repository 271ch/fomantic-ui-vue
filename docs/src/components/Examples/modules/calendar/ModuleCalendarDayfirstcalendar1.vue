<template>
  <div>
      <div class="ui calendar" id="day_first_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#day_first_calendar')
        .calendar({
          type: 'date',
          monthFirst: false
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarDayfirstcalendar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Day first calendar',
    description: 'You can chose to use a day first display calendar (parsing and conversion are impacted too)',
    model: '      <div class="ui calendar" id="day_first_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#day_first_calendar\')\n' +
      '        .calendar({\n' +
      '          type: \'date\',\n' +
      '          monthFirst: false\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
