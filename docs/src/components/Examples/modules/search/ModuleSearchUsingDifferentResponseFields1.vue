<template>
  <div>
      <div class="ui ignored code">
      $('.ui.search')
        .search({
          apiSettings: {
            url: '//api.github.com/search/repositories?q={query}'
          },
          fields: {
            results : 'items',
            title   : 'name',
            url     : 'html_url'
          },
          minCharacters : 3
        })
      ;
      </div>
      <div class="ui search">
        <div class="ui left icon input">
          <input class="prompt" type="text" placeholder="Search GitHub"/>
          <i class="github icon"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSearchUsingDifferentResponseFields1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Examples',
    title2: 'Using Different Response Fields',
    description: 'Search expects a very specific API response, however you can easily modify the mapping of server response to displayed field using the',
    model: '      <div class="ui ignored code">\n' +
      '      $(\'.ui.search\')\n' +
      '        .search({\n' +
      '          apiSettings: {\n' +
      '            url: \'//api.github.com/search/repositories?q={query}\'\n' +
      '          },\n' +
      '          fields: {\n' +
      '            results : \'items\',\n' +
      '            title   : \'name\',\n' +
      '            url     : \'html_url\'\n' +
      '          },\n' +
      '          minCharacters : 3\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui search">\n' +
      '        <div class="ui left icon input">\n' +
      '          <input class="prompt" type="text" placeholder="Search GitHub"/>\n' +
      '          <i class="github icon"/>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
