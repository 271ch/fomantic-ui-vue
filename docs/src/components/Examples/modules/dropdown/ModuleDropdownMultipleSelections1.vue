<template>
  <div>
      <div class="code" data-type="javascript" data-demo="true">
        $('#multi-select')
          .dropdown()
        ;
      </div>
      <select class="ui search selection dropdown" multiple="multiple" id="multi-select">
      </select>
      <div class="ui ignored hidden divider"/>
      <h5 class="ui sub header">Dropdown</h5>
      <div class="code" data-label="HTML" data-type="html">
        <div class="ui multiple selection dropdown">
          <!-- This will receive comma separated value like OH,TX,WY !-->
          <input name="states" type="hidden"/>
          <i class="dropdown icon"/>
          <div class="default text">States</div>
          <div class="menu">
            <div class="item" data-value="AL">Alabama</div>
            <div class="item" data-value="AK">Alaska</div>
            <div class="item" data-value="AZ">Arizona</div>
            <div class="item" data-value="AR">Arkansas</div>
            <div class="item" data-value="CA">California</div>
            <!-- Saving your scroll sanity !-->
            <div class="item" data-value="OH">Ohio</div>
            <div class="item" data-value="OK">Oklahoma</div>
            <div class="item" data-value="OR">Oregon</div>
            <div class="item" data-value="PA">Pennsylvania</div>
            <div class="item" data-value="RI">Rhode Island</div>
            <div class="item" data-value="SC">South Carolina</div>
            <div class="item" data-value="SD">South Dakota</div>
            <div class="item" data-value="TN">Tennessee</div>
            <div class="item" data-value="TX">Texas</div>
            <div class="item" data-value="UT">Utah</div>
            <div class="item" data-value="VT">Vermont</div>
            <div class="item" data-value="VA">Virginia</div>
            <div class="item" data-value="WA">Washington</div>
            <div class="item" data-value="WV">West Virginia</div>
            <div class="item" data-value="WI">Wisconsin</div>
            <div class="item" data-value="WY">Wyoming</div>
          </div>
        </div>
      </div>
      <h5 class="ui sub header">Select</h5>
      <div class="code" data-label="HTML" data-type="html">
        <select name="states" class="ui selection dropdown" multiple="multiple" id="multi-select">
          <option value="">States</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownMultipleSelections1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Initializing',
    title2: 'Multiple Selections',
    description: '???',
    model: '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'#multi-select\')\n' +
      '          .dropdown()\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <select class="ui search selection dropdown" multiple="multiple" id="multi-select">\n' +
      '      </select>\n' +
      '      <div class="ui ignored hidden divider"/>\n' +
      '      <h5 class="ui sub header">Dropdown</h5>\n' +
      '      <div class="code" data-label="HTML" data-type="html">\n' +
      '        <div class="ui multiple selection dropdown">\n' +
      '          <!-- This will receive comma separated value like OH,TX,WY !-->\n' +
      '          <input name="states" type="hidden"/>\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="default text">States</div>\n' +
      '          <div class="menu">\n' +
      '            <div class="item" data-value="AL">Alabama</div>\n' +
      '            <div class="item" data-value="AK">Alaska</div>\n' +
      '            <div class="item" data-value="AZ">Arizona</div>\n' +
      '            <div class="item" data-value="AR">Arkansas</div>\n' +
      '            <div class="item" data-value="CA">California</div>\n' +
      '            <!-- Saving your scroll sanity !-->\n' +
      '            <div class="item" data-value="OH">Ohio</div>\n' +
      '            <div class="item" data-value="OK">Oklahoma</div>\n' +
      '            <div class="item" data-value="OR">Oregon</div>\n' +
      '            <div class="item" data-value="PA">Pennsylvania</div>\n' +
      '            <div class="item" data-value="RI">Rhode Island</div>\n' +
      '            <div class="item" data-value="SC">South Carolina</div>\n' +
      '            <div class="item" data-value="SD">South Dakota</div>\n' +
      '            <div class="item" data-value="TN">Tennessee</div>\n' +
      '            <div class="item" data-value="TX">Texas</div>\n' +
      '            <div class="item" data-value="UT">Utah</div>\n' +
      '            <div class="item" data-value="VT">Vermont</div>\n' +
      '            <div class="item" data-value="VA">Virginia</div>\n' +
      '            <div class="item" data-value="WA">Washington</div>\n' +
      '            <div class="item" data-value="WV">West Virginia</div>\n' +
      '            <div class="item" data-value="WI">Wisconsin</div>\n' +
      '            <div class="item" data-value="WY">Wyoming</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <h5 class="ui sub header">Select</h5>\n' +
      '      <div class="code" data-label="HTML" data-type="html">\n' +
      '        <select name="states" class="ui selection dropdown" multiple="multiple" id="multi-select">\n' +
      '          <option value="">States</option>\n' +
      '          <option value="AL">Alabama</option>\n' +
      '          <option value="AK">Alaska</option>\n' +
      '          <option value="AZ">Arizona</option>\n' +
      '          <option value="AR">Arkansas</option>\n' +
      '          <option value="CA">California</option>\n' +
      '          <option value="OH">Ohio</option>\n' +
      '          <option value="OK">Oklahoma</option>\n' +
      '          <option value="OR">Oregon</option>\n' +
      '          <option value="PA">Pennsylvania</option>\n' +
      '          <option value="RI">Rhode Island</option>\n' +
      '          <option value="SC">South Carolina</option>\n' +
      '          <option value="SD">South Dakota</option>\n' +
      '          <option value="TN">Tennessee</option>\n' +
      '          <option value="TX">Texas</option>\n' +
      '          <option value="UT">Utah</option>\n' +
      '          <option value="VT">Vermont</option>\n' +
      '          <option value="VA">Virginia</option>\n' +
      '          <option value="WA">Washington</option>\n' +
      '          <option value="WV">West Virginia</option>\n' +
      '          <option value="WI">Wisconsin</option>\n' +
      '          <option value="WY">Wyoming</option>\n' +
      '        </select>\n' +
      '      </div>\n',
  },
};
</script>
