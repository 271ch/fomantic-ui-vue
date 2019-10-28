<template>
  <div>
      <h5>Example 4:<br/>Shortyears 00-39 -&gt; 1800-1839<br/>
          Shortyears 40-99 -&gt; 1740-1799</h5>
      <div class="ui calendar" id="shortyear_example4">
          <div class="ui input left icon">
              <i class="calendar icon"/>
              <input type="text" placeholder="Date"/>
          </div>
      </div>
      <div class="code" data-type="javascript">
      $('#shortyear_example4')
          .calendar({
              type: 'date',
              currentCentury: 1800,
              centuryBreak: 40
          })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarCenturyCalculationforshortyears4',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Century Calculation for shortyears',
    description: 'When a 2-digit shortyear is entered, you can adjust how to calculate the belonging century',
    model: '      <h5>Example 4:<br/>Shortyears 00-39 -&gt; 1800-1839<br/>\n' +
      '          Shortyears 40-99 -&gt; 1740-1799</h5>\n' +
      '      <div class="ui calendar" id="shortyear_example4">\n' +
      '          <div class="ui input left icon">\n' +
      '              <i class="calendar icon"/>\n' +
      '              <input type="text" placeholder="Date"/>\n' +
      '          </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#shortyear_example4\')\n' +
      '          .calendar({\n' +
      '              type: \'date\',\n' +
      '              currentCentury: 1800,\n' +
      '              centuryBreak: 40\n' +
      '          })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
