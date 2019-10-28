<template>
  <div>
      <div class="ui calendar" id="disableddaysofweek_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#disableddaysofweek_calendar')
        .calendar({
            disabledDaysOfWeek: [1,3,5]
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarDaysofWeek1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Disabling specific Days',
    title2: 'Days of Week',
    description: 'Disable each Monday, Wednesday and Friday from selection',
    model: '      <div class="ui calendar" id="disableddaysofweek_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#disableddaysofweek_calendar\')\n' +
      '        .calendar({\n' +
      '            disabledDaysOfWeek: [1,3,5]\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
