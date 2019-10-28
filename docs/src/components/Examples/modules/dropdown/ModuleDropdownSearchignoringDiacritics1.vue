<template>
  <div>
      <div class="ui ignored info message">
        If you want to support IE using the <code>ignoreDiacritics</code> option, you have to include a polyfill for the   <code>String().normalize()</code> method like <a href="https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js">unorm</a>.
      </div>
      <div class="ui search selection dropdown" id="diacriticsexample">
        <input type="hidden" name="diacritics"/>
        <i class="dropdown icon"/>
        <div class="default text">Search diacritics by only typing usual vowels</div>
        <div class="menu">
            <div class="item">André</div>
            <div class="item">Bokmål</div>
            <div class="item">café</div>
            <div class="item">cafetería</div>
            <div class="item">château</div>
            <div class="item">décolleté</div>
            <div class="item">Élysée</div>
            <div class="item">Fräulein</div>
            <div class="item">garçon</div>
            <div class="item">háček</div>
            <div class="item">inrō</div>
            <div class="item">jūjutsu</div>
            <div class="item">kroužek</div>
            <div class="item">La Niña</div>
            <div class="item">Māori</div>
            <div class="item">négligée</div>
            <div class="item">pączki</div>
            <div class="item">Québec</div>
            <div class="item">ragoût</div>
            <div class="item">Škoda</div>
            <div class="item">takahē</div>
            <div class="item">über</div>
            <div class="item">voilà</div>
            <div class="item">whekī</div>
            <div class="item">c Zoë</div>
        </div>
      </div>
      <div class="evaluated code" data-type="javascript">
      $('#diacriticsexample')
        .dropdown({
          ignoreDiacritics: true,
          sortSelect: true,
          fullTextSearch:'exact'
        });
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSearchignoringDiacritics1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Search ignoring Diacritics',
    description: 'A selection dropdown can allow a user to ignore all Diacritics while searching.',
    model: '      <div class="ui ignored info message">\n' +
      '        If you want to support IE using the <code>ignoreDiacritics</code> option, you have to include a polyfill for the   <code>String().normalize()</code> method like <a href="https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js">unorm</a>.\n' +
      '      </div>\n' +
      '      <div class="ui search selection dropdown" id="diacriticsexample">\n' +
      '        <input type="hidden" name="diacritics"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Search diacritics by only typing usual vowels</div>\n' +
      '        <div class="menu">\n' +
      '            <div class="item">André</div>\n' +
      '            <div class="item">Bokmål</div>\n' +
      '            <div class="item">café</div>\n' +
      '            <div class="item">cafetería</div>\n' +
      '            <div class="item">château</div>\n' +
      '            <div class="item">décolleté</div>\n' +
      '            <div class="item">Élysée</div>\n' +
      '            <div class="item">Fräulein</div>\n' +
      '            <div class="item">garçon</div>\n' +
      '            <div class="item">háček</div>\n' +
      '            <div class="item">inrō</div>\n' +
      '            <div class="item">jūjutsu</div>\n' +
      '            <div class="item">kroužek</div>\n' +
      '            <div class="item">La Niña</div>\n' +
      '            <div class="item">Māori</div>\n' +
      '            <div class="item">négligée</div>\n' +
      '            <div class="item">pączki</div>\n' +
      '            <div class="item">Québec</div>\n' +
      '            <div class="item">ragoût</div>\n' +
      '            <div class="item">Škoda</div>\n' +
      '            <div class="item">takahē</div>\n' +
      '            <div class="item">über</div>\n' +
      '            <div class="item">voilà</div>\n' +
      '            <div class="item">whekī</div>\n' +
      '            <div class="item">c Zoë</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '      $(\'#diacriticsexample\')\n' +
      '        .dropdown({\n' +
      '          ignoreDiacritics: true,\n' +
      '          sortSelect: true,\n' +
      '          fullTextSearch:\'exact\'\n' +
      '        });\n' +
      '      </div>\n',
  },
};
</script>
