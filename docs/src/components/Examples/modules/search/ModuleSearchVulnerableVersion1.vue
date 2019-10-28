<template>
  <div>
    <div class="ui search evilexample">
      <div class="ui left icon input">
        <input class="prompt" type="text" placeholder="Search animals"/>
        <i class="search icon"/>
      </div>
    </div>
    <div class="evaluated code" data-type="javascript">
    $('.ui.search.evilexample')
      .search({
        apiSettings: {
          url: '/evilapi.json'
        },
        fields: {
          title   : 'name'
        },
        minCharacters : 2
        });
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSearchVulnerableVersion1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Examples',
    title2: 'Vulnerable Version',
    description: '???',
    model: '        <div class="ui search evilexample">\n' +
      '          <div class="ui left icon input">\n' +
      '            <input class="prompt" type="text" placeholder="Search animals"/>\n' +
      '            <i class="search icon"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.ui.search.evilexample\')\n' +
      '          .search({\n' +
      '          apiSettings: {\n' +
      '            url: \'/evilapi.json\'\n' +
      '          },\n' +
      '          fields: {\n' +
      '            title   : \'name\'\n' +
      '          },\n' +
      '          minCharacters : 2\n' +
      '          });\n' +
      '        </div>\n',
  },
};
</script>
