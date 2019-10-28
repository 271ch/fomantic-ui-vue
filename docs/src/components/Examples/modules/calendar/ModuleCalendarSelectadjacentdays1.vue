<template>
  <div>
      <div class="ui calendar" id="adjacentdays_calendar">
          <div class="ui input left icon">
              <i class="calendar icon"/>
              <input type="text" placeholder="Date"/>
          </div>
      </div>
      <div class="evaluated code" data-type="javascript">
      $('#adjacentdays_calendar')
        .calendar({
          selectAdjacentDays: true,
          type: 'date'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarSelectadjacentdays1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Select adjacent days',
    description: 'It\'s possible to also select adjacent days of the previous and next month in the current month view instead of being disabled',
    model: '      <div class="ui calendar" id="adjacentdays_calendar">\n' +
      '          <div class="ui input left icon">\n' +
      '              <i class="calendar icon"/>\n' +
      '              <input type="text" placeholder="Date"/>\n' +
      '          </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '      $(\'#adjacentdays_calendar\')\n' +
      '        .calendar({\n' +
      '          selectAdjacentDays: true,\n' +
      '          type: \'date\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
