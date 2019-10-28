<template>
  <div>
      <div class="ui calendar" id="year_first_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#year_first_calendar')
        .calendar({
          startMode: 'year'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarYearfirstcalendar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Year first calendar',
    description: 'A year first calendar allow you to select a date by starting to select a year',
    model: '      <div class="ui calendar" id="year_first_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#year_first_calendar\')\n' +
      '        .calendar({\n' +
      '          startMode: \'year\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
