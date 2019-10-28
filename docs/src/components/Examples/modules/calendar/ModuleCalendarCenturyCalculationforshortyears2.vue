<template>
  <div>
      <h5>Example 2:<br/> Shortyears 00-99 -&gt; 1900-1999</h5>
      <div class="ui calendar" id="shortyear_example2">
          <div class="ui input left icon">
              <i class="calendar icon"/>
              <input type="text" placeholder="Date"/>
          </div>
      </div>
      <div class="code" data-type="javascript">
      $('#shortyear_example2')
          .calendar({
              type: 'date',
              centuryBreak: 0
          })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarCenturyCalculationforshortyears2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Century Calculation for shortyears',
    description: 'When a 2-digit shortyear is entered, you can adjust how to calculate the belonging century',
    model: '      <h5>Example 2:<br/> Shortyears 00-99 -&gt; 1900-1999</h5>\n' +
      '      <div class="ui calendar" id="shortyear_example2">\n' +
      '          <div class="ui input left icon">\n' +
      '              <i class="calendar icon"/>\n' +
      '              <input type="text" placeholder="Date"/>\n' +
      '          </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#shortyear_example2\')\n' +
      '          .calendar({\n' +
      '              type: \'date\',\n' +
      '              centuryBreak: 0\n' +
      '          })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
