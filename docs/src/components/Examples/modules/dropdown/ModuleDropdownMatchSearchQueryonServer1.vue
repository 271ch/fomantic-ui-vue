<template>
  <div>
      <div class="ui ignored positive message">When a user refreshes the page, selection labels are automatically recreated by using <code>sessionStorage</code> to store the corresponding names for selected values. You can disable this feature by setting <code>saveRemoteData: false</code></div>
      <div class="ui form">
        <div class="two fields">
          <div class="field">
            <label>Favorite Animal</label>
            <div class="ui search selection dropdown">
              <input type="hidden"/>
              <i class="dropdown icon"/>
              <input type="text" class="search"/>
              <div class="default text">Select one...</div>
            </div>
          </div>
          <div class="field">
            <label>Favorite Animals</label>
            <div class="ui multiple search selection dropdown">
              <input type="hidden"/>
              <i class="dropdown icon"/>
              <input type="text" class="search"/>
              <div class="default text">Select...</div>
            </div>
          </div>
        </div>
      </div>
      <div class="evaluated code" data-type="javascript">
        $('.remote.filter.example .ui.dropdown')
          .dropdown({
            apiSettings: {
              // this url parses query server side and returns filtered results
              url: '//api.semantic-ui.com/tags/{query}'
            },
          })
        ;
      </div>
      <div class="code" data-type="JSON">
      // Expected server response
      {
          "success": true,
          "results": [
            {
              // name displayed in dropdown
              "name"  : "Choice 1",
              // selected value
              "value" : "value1",
              // name displayed after selection (optional)
              "text"  : "Choice 1"
              // whether field should be displayed as disabled (optional)
              "disabled"  : false,
              // path to image to be displayed to the left (optional)
              "image"  : false,
              // whether the image should be displayed in a different style (optional)
              "imageClass"  : "ui avatar image",
              // icon name to be displayed to the left (optional)
              "icon"  : "pink female",
              // whether the icon should be displayed in a different style
              // (usually 'flag' if a given value for "icon" is a flag) (optional)
              "iconClass"  : "flag"
            },
            {
              "name"  : "Choice 2",
              "value" : "value2",
              "text"  : "Choice 2"
            },
            {
              "name"  : "Choice 3",
              "value" : "value3",
              "text"  : "Choice 3"
            },
            {
              "name"  : "Choice 4",
              "value" : "value4",
              "text"  : "Choice 4"
            },
            {
              "name"  : "Choice 5",
              "value" : "value5",
              "text"  : "Choice 5"
            }
          ]
      }
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownMatchSearchQueryonServer1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Selection Dropdowns',
    title2: 'Match Search Query on Server',
    description: '???',
    model: '      <div class="ui ignored positive message">When a user refreshes the page, selection labels are automatically recreated by using <code>sessionStorage</code> to store the corresponding names for selected values. You can disable this feature by setting <code>saveRemoteData: false</code></div>\n' +
      '      <div class="ui form">\n' +
      '        <div class="two fields">\n' +
      '          <div class="field">\n' +
      '            <label>Favorite Animal</label>\n' +
      '            <div class="ui search selection dropdown">\n' +
      '              <input type="hidden"/>\n' +
      '              <i class="dropdown icon"/>\n' +
      '              <input type="text" class="search"/>\n' +
      '              <div class="default text">Select one...</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="field">\n' +
      '            <label>Favorite Animals</label>\n' +
      '            <div class="ui multiple search selection dropdown">\n' +
      '              <input type="hidden"/>\n' +
      '              <i class="dropdown icon"/>\n' +
      '              <input type="text" class="search"/>\n' +
      '              <div class="default text">Select...</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.remote.filter.example .ui.dropdown\')\n' +
      '          .dropdown({\n' +
      '            apiSettings: {\n' +
      '              // this url parses query server side and returns filtered results\n' +
      '              url: \'//api.semantic-ui.com/tags/{query}\'\n' +
      '            },\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="JSON">\n' +
      '      // Expected server response\n' +
      '      {\n' +
      '          "success": true,\n' +
      '          "results": [\n' +
      '            {\n' +
      '              // name displayed in dropdown\n' +
      '              "name"  : "Choice 1",\n' +
      '              // selected value\n' +
      '              "value" : "value1",\n' +
      '              // name displayed after selection (optional)\n' +
      '              "text"  : "Choice 1"\n' +
      '              // whether field should be displayed as disabled (optional)\n' +
      '              "disabled"  : false,\n' +
      '              // path to image to be displayed to the left (optional)\n' +
      '              "image"  : false,\n' +
      '              // whether the image should be displayed in a different style (optional)\n' +
      '              "imageClass"  : "ui avatar image",\n' +
      '              // icon name to be displayed to the left (optional)\n' +
      '              "icon"  : "pink female",\n' +
      '              // whether the icon should be displayed in a different style\n' +
      '              // (usually \'flag\' if a given value for "icon" is a flag) (optional)\n' +
      '              "iconClass"  : "flag"\n' +
      '            },\n' +
      '            {\n' +
      '              "name"  : "Choice 2",\n' +
      '              "value" : "value2",\n' +
      '              "text"  : "Choice 2"\n' +
      '            },\n' +
      '            {\n' +
      '              "name"  : "Choice 3",\n' +
      '              "value" : "value3",\n' +
      '              "text"  : "Choice 3"\n' +
      '            },\n' +
      '            {\n' +
      '              "name"  : "Choice 4",\n' +
      '              "value" : "value4",\n' +
      '              "text"  : "Choice 4"\n' +
      '            },\n' +
      '            {\n' +
      '              "name"  : "Choice 5",\n' +
      '              "value" : "value5",\n' +
      '              "text"  : "Choice 5"\n' +
      '            }\n' +
      '          ]\n' +
      '      }\n' +
      '      </div>\n',
  },
};
</script>
