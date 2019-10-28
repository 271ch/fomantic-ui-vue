<template>
  <div>
      <div class="ui calendar" id="time_calendar">
        <div class="ui input left icon">
          <i class="time icon"/>
          <input type="text" placeholder="Time"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#time_calendar')
        .calendar({
          type: 'time'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarTimecalendar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Time calendar',
    description: 'A time calendar disable the date selection',
    model: '      <div class="ui calendar" id="time_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="time icon"/>\n' +
      '          <input type="text" placeholder="Time"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#time_calendar\')\n' +
      '        .calendar({\n' +
      '          type: \'time\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
