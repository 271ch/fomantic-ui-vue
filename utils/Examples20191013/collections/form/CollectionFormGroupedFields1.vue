<template>
  <div>
    <div class="ui form">
      <div class="grouped fields">
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
  name: 'CollectionFormGroupedFields1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Group Variations',
      title2: 'Grouped Fields',
      description: 'Fields can show related choices',
      model: '    <div class="ui form">\n' +
      '      <div class="grouped fields">\n' +
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
