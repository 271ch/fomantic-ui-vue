<template>
  <div>
      <div class="ui calendar" id="minmax_calendar_2" data-min-date="10/15/2018 08:00:00" data-max-date="10/19/2018 18:00:00">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarMinmaxdate2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Min/max date',
    description: 'You can set a minimum and a maximum selection date',
    model: '      <div class="ui calendar" id="minmax_calendar_2" data-min-date="10/15/2018 08:00:00" data-max-date="10/19/2018 18:00:00">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date"/>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
