<template>
  <div>
      <div class="ui calendar" id="button_calendar">
        <div class="ui button">Select date</div>
      </div>
      <div class="code" data-type="javascript">
      $('#button_calendar')
        .calendar()
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarButton1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Coupling',
    title2: 'Button',
    description: 'A calendar can be coupled to a button',
    model: '      <div class="ui calendar" id="button_calendar">\n' +
      '        <div class="ui button">Select date</div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#button_calendar\')\n' +
      '        .calendar()\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
