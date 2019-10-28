<template>
  <div>
      <h5>Example 3:<br/> Shortyears 00-59 -&gt; 3000-3059<br/>
          Shortyears 60-99 -&gt; 2900-2959</h5>
      <div class="ui calendar" id="shortyear_example3">
          <div class="ui input left icon">
              <i class="calendar icon"/>
              <input type="text" placeholder="Date"/>
          </div>
      </div>
      <div class="code" data-type="javascript">
      $('#shortyear_example3')
          .calendar({
              type: 'date',
              currentCentury: 3000
          })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarCenturyCalculationforshortyears3',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Century Calculation for shortyears',
    description: 'When a 2-digit shortyear is entered, you can adjust how to calculate the belonging century',
    model: '      <h5>Example 3:<br/> Shortyears 00-59 -&gt; 3000-3059<br/>\n' +
      '          Shortyears 60-99 -&gt; 2900-2959</h5>\n' +
      '      <div class="ui calendar" id="shortyear_example3">\n' +
      '          <div class="ui input left icon">\n' +
      '              <i class="calendar icon"/>\n' +
      '              <input type="text" placeholder="Date"/>\n' +
      '          </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#shortyear_example3\')\n' +
      '          .calendar({\n' +
      '              type: \'date\',\n' +
      '              currentCentury: 3000\n' +
      '          })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
