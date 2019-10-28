<template>
  <div>
    <div class="ui search">
      <div class="ui left icon input">
        <input class="prompt" type="text" placeholder="Search GitHub"/>
        <i class="github icon"/>
      </div>
    </div>
    <div class="ignored code" data-type="javascript">
    $('.ui.search')
      .search({
        type          : 'category',
        minCharacters : 3,
        apiSettings   : {
          onResponse: function(githubResponse) {
            var
              response = {
                results : {}
              }
            ;
            // translate GitHub API response to work with search
            $.each(githubResponse.items, function(index, item) {
              var
                language   = item.language || 'Unknown',
                maxResults = 8
              ;
              if(index &gt;= maxResults) {
                return false;
              }
              // create new language category
              if(response.results[language] === undefined) {
                response.results[language] = {
                  name    : language,
                  results : []
                };
              }
              // add result to category
              response.results[language].results.push({
                title       : item.name,
                description : item.description,
                url         : item.html_url
              });
            });
            return response;
          },
          url: '//api.github.com/search/repositories?q={query}'
        }
      })
    ;
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSearchUsingAPISettings1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Examples',
    title2: 'Using API Settings',
    description: '???',
    model: '      <div class="ui search">\n' +
      '        <div class="ui left icon input">\n' +
      '          <input class="prompt" type="text" placeholder="Search GitHub"/>\n' +
      '          <i class="github icon"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ignored code" data-type="javascript">\n' +
      '      $(\'.ui.search\')\n' +
      '        .search({\n' +
      '          type          : \'category\',\n' +
      '          minCharacters : 3,\n' +
      '          apiSettings   : {\n' +
      '            onResponse: function(githubResponse) {\n' +
      '              var\n' +
      '                response = {\n' +
      '                  results : {}\n' +
      '                }\n' +
      '              ;\n' +
      '              // translate GitHub API response to work with search\n' +
      '              $.each(githubResponse.items, function(index, item) {\n' +
      '                var\n' +
      '                  language   = item.language || \'Unknown\',\n' +
      '                  maxResults = 8\n' +
      '                ;\n' +
      '                if(index &gt;= maxResults) {\n' +
      '                  return false;\n' +
      '                }\n' +
      '                // create new language category\n' +
      '                if(response.results[language] === undefined) {\n' +
      '                  response.results[language] = {\n' +
      '                    name    : language,\n' +
      '                    results : []\n' +
      '                  };\n' +
      '                }\n' +
      '                // add result to category\n' +
      '                response.results[language].results.push({\n' +
      '                  title       : item.name,\n' +
      '                  description : item.description,\n' +
      '                  url         : item.html_url\n' +
      '                });\n' +
      '              });\n' +
      '              return response;\n' +
      '            },\n' +
      '            url: \'//api.github.com/search/repositories?q={query}\'\n' +
      '          }\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
