<template>
  <div>
      <h5>Example 1:<br/> Shortyears 00-99 -&gt; 2000-2099</h5>
        <div class="ui calendar" id="shortyear_example1">
            <div class="ui input left icon">
                <i class="calendar icon"/>
                <input type="text" placeholder="Date"/>
            </div>
        </div>
        <div class="code" data-type="javascript">
        $('#shortyear_example1')
            .calendar({
                type: 'date',
                centuryBreak: 100
            })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarCenturyCalculationforshortyears1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Century Calculation for shortyears',
    description: 'When a 2-digit shortyear is entered, you can adjust how to calculate the belonging century',
    model: '      <h5>Example 1:<br/> Shortyears 00-99 -&gt; 2000-2099</h5>\n' +
      '        <div class="ui calendar" id="shortyear_example1">\n' +
      '            <div class="ui input left icon">\n' +
      '                <i class="calendar icon"/>\n' +
      '                <input type="text" placeholder="Date"/>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="code" data-type="javascript">\n' +
      '        $(\'#shortyear_example1\')\n' +
      '            .calendar({\n' +
      '                type: \'date\',\n' +
      '                centuryBreak: 100\n' +
      '            })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
