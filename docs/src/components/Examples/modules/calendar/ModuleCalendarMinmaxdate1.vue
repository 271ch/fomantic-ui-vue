<template>
  <div>
      <div class="ui calendar" id="minmax_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      var today = new Date();
      $('#minmax_calendar')
        .calendar({
          minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
          maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarMinmaxdate1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Min/max date',
    description: 'You can set a minimum and a maximum selection date',
    model: '      <div class="ui calendar" id="minmax_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      var today = new Date();\n' +
      '      $(\'#minmax_calendar\')\n' +
      '        .calendar({\n' +
      '          minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),\n' +
      '          maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
