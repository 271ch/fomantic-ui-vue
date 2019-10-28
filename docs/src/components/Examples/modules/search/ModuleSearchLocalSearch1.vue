<template>
  <div>
      <div class="ui ignored info message">
        By default, results will return content first that begin with the query text, but also afterward content that matches the query anywhere inside. To disable full text search you can specify in settings <code>fullTextSearch: false</code>.
      </div>
      <div class="ui search">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Search countries..."/>
          <i class="search icon"/>
        </div>
        <div class="results"/>
      </div>
      <div class="code" data-type="javascript">
        $('.ui.search')
          .search({
            source: content
          })
        ;
      </div>
      <div class="hidden code" data-type="javascript">
      var content = [
        { title: 'Andorra' },
        { title: 'United Arab Emirates' },
        { title: 'Afghanistan' },
        { title: 'Antigua' },
        { title: 'Anguilla' },
        { title: 'Albania' },
        { title: 'Armenia' },
        { title: 'Netherlands Antilles' },
        { title: 'Angola' },
        { title: 'Argentina' },
        { title: 'American Samoa' },
        { title: 'Austria' },
        { title: 'Australia' },
        { title: 'Aruba' },
        { title: 'Aland Islands' },
        { title: 'Azerbaijan' },
        { title: 'Bosnia' },
        { title: 'Barbados' },
        { title: 'Bangladesh' },
        { title: 'Belgium' },
        { title: 'Burkina Faso' },
        { title: 'Bulgaria' },
        { title: 'Bahrain' },
        { title: 'Burundi' }
        // etc
      ];
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSearchLocalSearch1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Types',
    title2: 'Local Search',
    description: 'A search can look for results inside a static local source.',
    model: '      <div class="ui ignored info message">\n' +
      '        By default, results will return content first that begin with the query text, but also afterward content that matches the query anywhere inside. To disable full text search you can specify in settings <code>fullTextSearch: false</code>.\n' +
      '      </div>\n' +
      '      <div class="ui search">\n' +
      '        <div class="ui icon input">\n' +
      '          <input class="prompt" type="text" placeholder="Search countries..."/>\n' +
      '          <i class="search icon"/>\n' +
      '        </div>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '        $(\'.ui.search\')\n' +
      '          .search({\n' +
      '            source: content\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="hidden code" data-type="javascript">\n' +
      '      var content = [\n' +
      '        { title: \'Andorra\' },\n' +
      '        { title: \'United Arab Emirates\' },\n' +
      '        { title: \'Afghanistan\' },\n' +
      '        { title: \'Antigua\' },\n' +
      '        { title: \'Anguilla\' },\n' +
      '        { title: \'Albania\' },\n' +
      '        { title: \'Armenia\' },\n' +
      '        { title: \'Netherlands Antilles\' },\n' +
      '        { title: \'Angola\' },\n' +
      '        { title: \'Argentina\' },\n' +
      '        { title: \'American Samoa\' },\n' +
      '        { title: \'Austria\' },\n' +
      '        { title: \'Australia\' },\n' +
      '        { title: \'Aruba\' },\n' +
      '        { title: \'Aland Islands\' },\n' +
      '        { title: \'Azerbaijan\' },\n' +
      '        { title: \'Bosnia\' },\n' +
      '        { title: \'Barbados\' },\n' +
      '        { title: \'Bangladesh\' },\n' +
      '        { title: \'Belgium\' },\n' +
      '        { title: \'Burkina Faso\' },\n' +
      '        { title: \'Bulgaria\' },\n' +
      '        { title: \'Bahrain\' },\n' +
      '        { title: \'Burundi\' }\n' +
      '        // etc\n' +
      '      ];\n' +
      '      </div>\n',
  },
};
</script>
