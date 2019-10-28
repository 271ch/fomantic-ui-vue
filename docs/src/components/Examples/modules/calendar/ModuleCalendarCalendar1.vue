<template>
  <div>
      <div class="ui calendar" id="standard_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date/Time"/>
        </div>
      </div>
      <div class="evaluated code" data-type="javascript">
      $('#standard_calendar')
        .calendar()
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarCalendar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Types',
    title2: 'Calendar',
    description: 'A standard calendar',
    model: '      <div class="ui calendar" id="standard_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date/Time"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '      $(\'#standard_calendar\')\n' +
      '        .calendar()\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
