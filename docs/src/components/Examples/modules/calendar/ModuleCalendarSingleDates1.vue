<template>
  <div>
      <div class="ui calendar" id="disableddates_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#disableddates_calendar')
        .calendar({
            initialDate: new Date(2018,11,1),
            disabledDates: [{
                    date: new Date(2018,11,22),
                    message: 'xmas gift shopping'
                },
                {
                    date: new Date(2018,11,25),
                    message: 'Santa Clause is coming to town'
                },
                new Date(2018,11,31)  /* No Reason. Everybody knows why ;) */
            ]
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarSingleDates1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Disabling specific Days',
    title2: 'Single Dates',
    description: 'Disabling specific single dates which can optionally display a reason in popup on hover',
    model: '      <div class="ui calendar" id="disableddates_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#disableddates_calendar\')\n' +
      '        .calendar({\n' +
      '            initialDate: new Date(2018,11,1),\n' +
      '            disabledDates: [{\n' +
      '                    date: new Date(2018,11,22),\n' +
      '                    message: \'xmas gift shopping\'\n' +
      '                },\n' +
      '                {\n' +
      '                    date: new Date(2018,11,25),\n' +
      '                    message: \'Santa Clause is coming to town\'\n' +
      '                },\n' +
      '                new Date(2018,11,31)  /* No Reason. Everybody knows why ;) */\n' +
      '            ]\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
