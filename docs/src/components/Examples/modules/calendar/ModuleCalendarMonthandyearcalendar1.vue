<template>
  <div>
      <div class="ui calendar" id="month_year_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#month_year_calendar')
        .calendar({
          type: 'month'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarMonthandyearcalendar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Month and year calendar',
    description: 'A month and year calendar disable the date and time selection',
    model: '      <div class="ui calendar" id="month_year_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#month_year_calendar\')\n' +
      '        .calendar({\n' +
      '          type: \'month\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
