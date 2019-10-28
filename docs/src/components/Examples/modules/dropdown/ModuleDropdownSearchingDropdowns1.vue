<template>
  <div>
      <div class="code" data-type="javascript" data-demo="true">
        $('#search-select')
          .dropdown()
        ;
      </div>
      <select class="ui search selection dropdown" id="search-select">
      </select>
      <div class="ui ignored hidden divider"/>
      <div class="code" data-label="HTML" data-type="html">
        <select class="ui search selection dropdown" id="search-select">
          <option value="">State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <!-- Saving your scroll sanity !-->
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
  name: 'ModuleDropdownSearchingDropdowns1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Initializing',
    title2: 'Searching Dropdowns',
    description: 'Using a',
    model: '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'#search-select\')\n' +
      '          .dropdown()\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <select class="ui search selection dropdown" id="search-select">\n' +
      '      </select>\n' +
      '      <div class="ui ignored hidden divider"/>\n' +
      '      <div class="code" data-label="HTML" data-type="html">\n' +
      '        <select class="ui search selection dropdown" id="search-select">\n' +
      '          <option value="">State</option>\n' +
      '          <option value="AL">Alabama</option>\n' +
      '          <option value="AK">Alaska</option>\n' +
      '          <option value="AZ">Arizona</option>\n' +
      '          <option value="AR">Arkansas</option>\n' +
      '          <option value="CA">California</option>\n' +
      '          <!-- Saving your scroll sanity !-->\n' +
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
