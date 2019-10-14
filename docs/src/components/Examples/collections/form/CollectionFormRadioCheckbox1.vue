<template>
  <div>
    <div class="evaluated code" data-type="javascript" data-label="true">
    $('.ui.radio.checkbox')
      .checkbox()
    ;
    </div>
    <div class="ui form">
      <div class="inline fields">
        <label for="fruit">Select your favorite fruit:</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit" checked="checked"/>
            <label>Apples</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit"/>
            <label>Oranges</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit"/>
            <label>Pears</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit"/>
            <label>Grapefruit</label>
          </div>
        </div>
      </div>
      <div class="grouped fields">
        <label for="fruit">Select your second favorite fruit:</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit2" checked="checked"/>
            <label>Apples</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit2"/>
            <label>Oranges</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit2"/>
            <label>Pears</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit2"/>
            <label>Grapefruit</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormRadioCheckbox1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'form',
    title1: 'Content',
    title2: 'Radio Checkbox',
    description: 'A form can include a',
    model: '    <div class="evaluated code" data-type="javascript" data-label="true">\n' +
      '    $(\'.ui.radio.checkbox\')\n' +
      '      .checkbox()\n' +
      '    ;\n' +
      '    </div>\n' +
      '    <div class="ui form">\n' +
      '      <div class="inline fields">\n' +
      '        <label for="fruit">Select your favorite fruit:</label>\n' +
      '        <div class="field">\n' +
      '          <div class="ui radio checkbox">\n' +
      '            <input type="radio" name="fruit" checked="checked"/>\n' +
      '            <label>Apples</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <div class="ui radio checkbox">\n' +
      '            <input type="radio" name="fruit"/>\n' +
      '            <label>Oranges</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <div class="ui radio checkbox">\n' +
      '            <input type="radio" name="fruit"/>\n' +
      '            <label>Pears</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <div class="ui radio checkbox">\n' +
      '            <input type="radio" name="fruit"/>\n' +
      '            <label>Grapefruit</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="grouped fields">\n' +
      '        <label for="fruit">Select your second favorite fruit:</label>\n' +
      '        <div class="field">\n' +
      '          <div class="ui radio checkbox">\n' +
      '            <input type="radio" name="fruit2" checked="checked"/>\n' +
      '            <label>Apples</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <div class="ui radio checkbox">\n' +
      '            <input type="radio" name="fruit2"/>\n' +
      '            <label>Oranges</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <div class="ui radio checkbox">\n' +
      '            <input type="radio" name="fruit2"/>\n' +
      '            <label>Pears</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <div class="ui radio checkbox">\n' +
      '            <input type="radio" name="fruit2"/>\n' +
      '            <label>Grapefruit</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
