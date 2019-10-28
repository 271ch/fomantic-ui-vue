<template>
  <div>
      <div class="ui form">
        <div class="two fields">
          <div class="field">
            <label>Start date</label>
            <div class="ui calendar" id="rangestart">
              <div class="ui input left icon">
                <i class="calendar icon"/>
                <input type="text" placeholder="Start"/>
              </div>
            </div>
          </div>
          <div class="field">
            <label>End date</label>
            <div class="ui calendar" id="rangeend">
              <div class="ui input left icon">
                <i class="calendar icon"/>
                <input type="text" placeholder="End"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#rangestart').calendar({
        type: 'date',
        endCalendar: $('#rangeend')
      });
      $('#rangeend').calendar({
        type: 'date',
        startCalendar: $('#rangestart')
      });
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarRange1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Types',
    title2: 'Range',
    description: 'A range calendar allow you to select a start date and a stop date',
    model: '      <div class="ui form">\n' +
      '        <div class="two fields">\n' +
      '          <div class="field">\n' +
      '            <label>Start date</label>\n' +
      '            <div class="ui calendar" id="rangestart">\n' +
      '              <div class="ui input left icon">\n' +
      '                <i class="calendar icon"/>\n' +
      '                <input type="text" placeholder="Start"/>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="field">\n' +
      '            <label>End date</label>\n' +
      '            <div class="ui calendar" id="rangeend">\n' +
      '              <div class="ui input left icon">\n' +
      '                <i class="calendar icon"/>\n' +
      '                <input type="text" placeholder="End"/>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#rangestart\').calendar({\n' +
      '        type: \'date\',\n' +
      '        endCalendar: $(\'#rangeend\')\n' +
      '      });\n' +
      '      $(\'#rangeend\').calendar({\n' +
      '        type: \'date\',\n' +
      '        startCalendar: $(\'#rangestart\')\n' +
      '      });\n' +
      '      </div>\n',
  },
};
</script>
