<template>
  <div>
      <div class="ui calendar" id="enableddates_calendar">
          <div class="ui input left icon">
              <i class="calendar icon"/>
              <input type="text" placeholder="Date"/>
          </div>
      </div>
      <div class="code" data-type="javascript">
          $('#enableddates_calendar')
          .calendar({
            type: 'date',
            initialDate: new Date(2019,2,1),
            enabledDates: [
                new Date(2018,2,5),
                new Date(2018,2,10),
                new Date(2018,2,20)
            ]
          })
          ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarEnableonlyspecificDates1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Disabling specific Days',
    title2: 'Enable only specific Dates',
    description: 'Disable all dates by default and only enable specific given dates.',
    model: '      <div class="ui calendar" id="enableddates_calendar">\n' +
      '          <div class="ui input left icon">\n' +
      '              <i class="calendar icon"/>\n' +
      '              <input type="text" placeholder="Date"/>\n' +
      '          </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '          $(\'#enableddates_calendar\')\n' +
      '          .calendar({\n' +
      '            type: \'date\',\n' +
      '            initialDate: new Date(2019,2,1),\n' +
      '            enabledDates: [\n' +
      '                new Date(2018,2,5),\n' +
      '                new Date(2018,2,10),\n' +
      '                new Date(2018,2,20)\n' +
      '            ]\n' +
      '          })\n' +
      '          ;\n' +
      '      </div>\n',
  },
};
</script>
