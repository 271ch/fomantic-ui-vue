<template>
  <div>
    <div class="code" data-type="javascript" data-label="true">
      $('.ui.calendar').calendar({
        type: 'date'
      });
    </div>
    <div class="ui form">
      <div class="field">
        <label>Date</label>
        <div class="ui calendar">
          <div class="ui input left icon">
            <i class="calendar icon"/>
            <input type="text" placeholder="Pick up a date" name="date"/>
          </div>        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormCalendar1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'form',
    title1: 'Content',
    title2: 'Calendar',
    description: 'A form can contain a',
    model: '    <div class="code" data-type="javascript" data-label="true">\n' +
      '      $(\'.ui.calendar\').calendar({\n' +
      '        type: \'date\'\n' +
      '      });\n' +
      '    </div>\n' +
      '    <div class="ui form">\n' +
      '      <div class="field">\n' +
      '        <label>Date</label>\n' +
      '        <div class="ui calendar">\n' +
      '          <div class="ui input left icon">\n' +
      '            <i class="calendar icon"/>\n' +
      '            <input type="text" placeholder="Pick up a date" name="date"/>\n' +
      '          </div>        \n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
