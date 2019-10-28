<template>
  <div>
      <div class="ui ignored info message">
          If you want to support IE using the <code>ignoreDiacritics</code> option, you have to include a polyfill for the   <code>String().normalize()</code> method like <a href="https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js">unorm</a>.
      </div>
      <div class="ui search" id="diacriticsexample">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Search Diacritics..."/>
          <i class="search icon"/>
        </div>
        <div class="results"/>
      </div>
      <div class="evaluated code" data-type="javascript">
        $('#diacriticsexample')
            .search({
                ignoreDiacritics: true,
                fullTextSearch:'exact',
                source: [
                    { title: 'André'},
                    { title: 'Bokmål'},
                    { title: 'café'},
                    { title: 'cafetería'},
                    { title: 'château'},
                    { title: 'décolleté'},
                    { title: 'Élysée'},
                    { title: 'Fräulein'},
                    { title: 'garçon'},
                    { title: 'háček'},
                    { title: 'inrō'},
                    { title: 'jūjutsu'},
                    { title: 'kroužek'},
                    { title: 'La Niña'},
                    { title: 'Māori'},
                    { title: 'négligée'},
                    { title: 'pączki'},
                    { title: 'Québec'},
                    { title: 'ragoût'},
                    { title: 'Škoda'},
                    { title: 'takahē'},
                    { title: 'über'},
                    { title: 'voilà'},
                    { title: 'whekī'},
                    { title: 'c Zoë'}
                ]
            })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSearchSearchignoringDiacritics1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Types',
    title2: 'Search ignoring Diacritics',
    description: 'A selection dropdown can allow a user to ignore all Diacritics while searching.',
    model: '      <div class="ui ignored info message">\n' +
      '          If you want to support IE using the <code>ignoreDiacritics</code> option, you have to include a polyfill for the   <code>String().normalize()</code> method like <a href="https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js">unorm</a>.\n' +
      '      </div>\n' +
      '      <div class="ui search" id="diacriticsexample">\n' +
      '        <div class="ui icon input">\n' +
      '          <input class="prompt" type="text" placeholder="Search Diacritics..."/>\n' +
      '          <i class="search icon"/>\n' +
      '        </div>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'#diacriticsexample\')\n' +
      '            .search({\n' +
      '                ignoreDiacritics: true,\n' +
      '                fullTextSearch:\'exact\',\n' +
      '                source: [\n' +
      '                    { title: \'André\'},\n' +
      '                    { title: \'Bokmål\'},\n' +
      '                    { title: \'café\'},\n' +
      '                    { title: \'cafetería\'},\n' +
      '                    { title: \'château\'},\n' +
      '                    { title: \'décolleté\'},\n' +
      '                    { title: \'Élysée\'},\n' +
      '                    { title: \'Fräulein\'},\n' +
      '                    { title: \'garçon\'},\n' +
      '                    { title: \'háček\'},\n' +
      '                    { title: \'inrō\'},\n' +
      '                    { title: \'jūjutsu\'},\n' +
      '                    { title: \'kroužek\'},\n' +
      '                    { title: \'La Niña\'},\n' +
      '                    { title: \'Māori\'},\n' +
      '                    { title: \'négligée\'},\n' +
      '                    { title: \'pączki\'},\n' +
      '                    { title: \'Québec\'},\n' +
      '                    { title: \'ragoût\'},\n' +
      '                    { title: \'Škoda\'},\n' +
      '                    { title: \'takahē\'},\n' +
      '                    { title: \'über\'},\n' +
      '                    { title: \'voilà\'},\n' +
      '                    { title: \'whekī\'},\n' +
      '                    { title: \'c Zoë\'}\n' +
      '                ]\n' +
      '            })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
