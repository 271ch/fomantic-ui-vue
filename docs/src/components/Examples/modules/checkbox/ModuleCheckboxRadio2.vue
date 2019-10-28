<template>
  <div>
      <div class="ui form">
        <div class="inline fields">
          <label>How often do you use checkboxes?</label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="frequency" checked="checked"/>
              <label>Once a week</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="frequency"/>
              <label>2-3 times a week</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="frequency"/>
              <label>Once a day</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="frequency"/>
              <label>Twice a day</label>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxRadio2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Types',
    title2: 'Radio',
    description: 'A checkbox can be formatted as a radio element. This means it is an exclusive option.',
    model: '      <div class="ui form">\n' +
      '        <div class="inline fields">\n' +
      '          <label>How often do you use checkboxes?</label>\n' +
      '          <div class="field">\n' +
      '            <div class="ui radio checkbox">\n' +
      '              <input type="radio" name="frequency" checked="checked"/>\n' +
      '              <label>Once a week</label>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="field">\n' +
      '            <div class="ui radio checkbox">\n' +
      '              <input type="radio" name="frequency"/>\n' +
      '              <label>2-3 times a week</label>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="field">\n' +
      '            <div class="ui radio checkbox">\n' +
      '              <input type="radio" name="frequency"/>\n' +
      '              <label>Once a day</label>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="field">\n' +
      '            <div class="ui radio checkbox">\n' +
      '              <input type="radio" name="frequency"/>\n' +
      '              <label>Twice a day</label>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
