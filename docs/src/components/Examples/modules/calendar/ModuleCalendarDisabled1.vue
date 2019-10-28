<template>
  <div>
      <div class="ui disabled calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date/Time"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarDisabled1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'States',
    title2: 'Disabled',
    description: 'A disabled calendar does not allow user interaction',
    model: '      <div class="ui disabled calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date/Time"/>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
