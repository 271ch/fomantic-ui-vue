<template>
  <div>
      <div class="ui calendar" id="date_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#date_calendar')
        .calendar({
          type: 'date'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarDatecalendar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Date calendar',
    description: 'A date calendar disable the time selection',
    model: '      <div class="ui calendar" id="date_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#date_calendar\')\n' +
      '        .calendar({\n' +
      '          type: \'date\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
