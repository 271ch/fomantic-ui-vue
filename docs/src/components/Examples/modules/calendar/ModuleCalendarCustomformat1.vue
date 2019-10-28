<template>
  <div>
      <div class="ui calendar" id="custom_format_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#custom_format_calendar')
        .calendar({
          monthFirst: false,
          type: 'date',
          formatter: {
            date: function (date, settings) {
              if (!date) return '';
              var day = date.getDate();
              var month = date.getMonth() + 1;
              var year = date.getFullYear();
              return day + '/' + month + '/' + year;
            }
          }
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarCustomformat1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Custom format',
    description: 'You can entirely change the date format',
    model: '      <div class="ui calendar" id="custom_format_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#custom_format_calendar\')\n' +
      '        .calendar({\n' +
      '          monthFirst: false,\n' +
      '          type: \'date\',\n' +
      '          formatter: {\n' +
      '            date: function (date, settings) {\n' +
      '              if (!date) return \'\';\n' +
      '              var day = date.getDate();\n' +
      '              var month = date.getMonth() + 1;\n' +
      '              var year = date.getFullYear();\n' +
      '              return day + \'/\' + month + \'/\' + year;\n' +
      '            }\n' +
      '          }\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
