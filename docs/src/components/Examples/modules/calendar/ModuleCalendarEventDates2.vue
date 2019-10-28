<template>
  <div>
      <div class="ui calendar" id="eventdates2_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
      <div class="evaluated code" data-type="javascript">
      $('#eventdates2_calendar').calendar({
          initialDate: new Date(2019,3,1),
          eventClass: 'inverted red',
          eventDates: [
              new Date(2019,3,20), //no message tooltip
              {
                date: new Date(2019,3,21),
                message: 'I got the default color (light red)'
              },{
                date: new Date(2019,3,22),
                message: 'Me too'
              }
          ]
      });
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarEventDates2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Highlighting specific Days',
    title2: 'Event Dates',
    description: 'Mark specific days as events, giving them a different cell style and a tooltip message',
    model: '      <div class="ui calendar" id="eventdates2_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '      $(\'#eventdates2_calendar\').calendar({\n' +
      '          initialDate: new Date(2019,3,1),\n' +
      '          eventClass: \'inverted red\',\n' +
      '          eventDates: [\n' +
      '              new Date(2019,3,20), //no message tooltip\n' +
      '              {\n' +
      '                date: new Date(2019,3,21),\n' +
      '                message: \'I got the default color (light red)\'\n' +
      '              },{\n' +
      '                date: new Date(2019,3,22),\n' +
      '                message: \'Me too\'\n' +
      '              }\n' +
      '          ]\n' +
      '      });\n' +
      '      </div>\n',
  },
};
</script>
