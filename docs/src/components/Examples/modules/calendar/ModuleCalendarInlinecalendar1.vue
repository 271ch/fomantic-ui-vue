<template>
  <div>
      <div class="ui calendar" id="inline_calendar">
      </div>
      <div class="evaluated code" data-type="javascript">
      $('#inline_calendar')
        .calendar()
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarInlinecalendar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Types',
    title2: 'Inline calendar',
    description: 'An inline calendar isn\'t shown in a popup',
    model: '      <div class="ui calendar" id="inline_calendar">\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '      $(\'#inline_calendar\')\n' +
      '        .calendar()\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
