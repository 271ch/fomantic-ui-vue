<template>
  <div>
      <div class="ui calendar" id="year_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#year_calendar')
        .calendar({
          type: 'year'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarYearcalendar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Year calendar',
    description: 'A year calendar allow you to select a year only',
    model: '      <div class="ui calendar" id="year_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#year_calendar\')\n' +
      '        .calendar({\n' +
      '          type: \'year\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
