<template>
  <div>
      <div class="ui calendar" id="french_calendar">
        <div class="ui input left icon">
          <i class="calendar icon"/>
          <input type="text" placeholder="Date/Time"/>
        </div>
      </div>
      <div class="code" data-type="javascript">
      $('#french_calendar')
        .calendar({
          text: {
            days: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Aujourdhui',
            now: 'Maintenant',
            am: 'AM',
            pm: 'PM'
          }
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCalendarLanguage1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'calendar',
    title1: 'Examples',
    title2: 'Language',
    description: 'It\'s possible to change the calendar language to fit with your needs',
    model: '      <div class="ui calendar" id="french_calendar">\n' +
      '        <div class="ui input left icon">\n' +
      '          <i class="calendar icon"/>\n' +
      '          <input type="text" placeholder="Date/Time"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'#french_calendar\')\n' +
      '        .calendar({\n' +
      '          text: {\n' +
      '            days: [\'D\', \'L\', \'M\', \'M\', \'J\', \'V\', \'S\'],\n' +
      '            months: [\'Janvier\', \'Février\', \'Mars\', \'Avril\', \'Mai\', \'Juin\', \'Juillet\', \'Août\', \'Septembre\', \'Octobre\', \'Novembre\', \'Decembre\'],\n' +
      '            monthsShort: [\'Jan\', \'Fev\', \'Mar\', \'Avr\', \'Mai\', \'Juin\', \'Juil\', \'Aou\', \'Sep\', \'Oct\', \'Nov\', \'Dec\'],\n' +
      '            today: \'Aujourd\\\'hui\',\n' +
      '            now: \'Maintenant\',\n' +
      '            am: \'AM\',\n' +
      '            pm: \'PM\'\n' +
      '          }\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
