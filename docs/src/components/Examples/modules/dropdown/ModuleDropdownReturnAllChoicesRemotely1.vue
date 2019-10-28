<template>
  <div>
      <div class="ui form">
        <div class="three fields">
          <div class="field">
            <label>Favorite Animal</label>
            <div class="ui selection dropdown">
              <input type="hidden"/>
              <i class="dropdown icon"/>
              <div class="default text">Select one...</div>
            </div>
          </div>
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
        $('.remote.choices.example .ui.dropdown')
          .dropdown({
            apiSettings: {
              // this url just returns a list of tags (with API response expected above)
              url: '//api.semantic-ui.com/tags/'
            },
            filterRemoteData: true
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownReturnAllChoicesRemotely1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Selection Dropdowns',
    title2: 'Return All Choices Remotely',
    description: 'When possible choicesets are large, ideally API results should only return values',
    model: '      <div class="ui form">\n' +
      '        <div class="three fields">\n' +
      '          <div class="field">\n' +
      '            <label>Favorite Animal</label>\n' +
      '            <div class="ui selection dropdown">\n' +
      '              <input type="hidden"/>\n' +
      '              <i class="dropdown icon"/>\n' +
      '              <div class="default text">Select one...</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
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
      '        $(\'.remote.choices.example .ui.dropdown\')\n' +
      '          .dropdown({\n' +
      '            apiSettings: {\n' +
      '              // this url just returns a list of tags (with API response expected above)\n' +
      '              url: \'//api.semantic-ui.com/tags/\'\n' +
      '            },\n' +
      '            filterRemoteData: true\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
