<template>
  <div>
      <div class="ui calendar" id="eventdates_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
      <div class="evaluated code" data-type="javascript">
      $('#eventdates_calendar').calendar({
          initialDate: new Date(2019,3,1),
          eventDates: [
              {
                date: new Date(2019,3,21),
                message: 'Show me in light purple',
                class: 'inverted purple'
              },{
                date: new Date(2019,3,22),
                message: 'Show me in green',
                class: 'green'
              }
          ]
      });
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarEventDates1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Highlighting specific Days',
    title2: 'Event Dates',
    description: 'Mark specific days as events, giving them a different cell style and a tooltip message',
    model: '      <div class="ui calendar" id="eventdates_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '      $(\'#eventdates_calendar\').calendar({\n' +
      '          initialDate: new Date(2019,3,1),\n' +
      '          eventDates: [\n' +
      '              {\n' +
      '                date: new Date(2019,3,21),\n' +
      '                message: \'Show me in light purple\',\n' +
      '                class: \'inverted purple\'\n' +
      '              },{\n' +
      '                date: new Date(2019,3,22),\n' +
      '                message: \'Show me in green\',\n' +
      '                class: \'green\'\n' +
      '              }\n' +
      '          ]\n' +
      '      });\n' +
      '      </div>\n',
  },
};
</script>
