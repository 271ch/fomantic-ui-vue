<template>
  <div>
    <div class="ui form">
      <div class="inline fields">
        <label>What's your favorite fruit?</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit"/>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormInlineFields2',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Group Variations',
      title2: 'Inline Fields',
      description: 'Multiple fields may be inline in a row',
      model: '    <div class="ui form">\n' +
      '      <div class="inline fields">\n' +
      '        <label>What\'s your favorite fruit?</label>\n' +
      '        <div class="field">\n' +
      '          <div class="ui radio checkbox">\n' +
      '            <input type="radio" name="fruit"/>\n' +
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
      '    </div>\n',
    };
  },
};
</script>
