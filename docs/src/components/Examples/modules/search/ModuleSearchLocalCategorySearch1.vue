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
            type: 'category',
            source: categoryContent
          })
        ;
      </div>
      <div class="hidden code" data-type="javascript">
      var categoryContent = [
        { category: 'South America', title: 'Brazil' },
        { category: 'South America', title: 'Peru' },
        { category: 'North America', title: 'Canada' },
        { category: 'Asia', title: 'South Korea' },
        { category: 'Asia', title: 'Japan' },
        { category: 'Asia', title: 'China' },
        { category: 'Europe', title: 'Denmark' },
        { category: 'Europe', title: 'England' },
        { category: 'Europe', title: 'France' },
        { category: 'Europe', title: 'Germany' },
        { category: 'Africa', title: 'Ethiopia' },
        { category: 'Africa', title: 'Nigeria' },
        { category: 'Africa', title: 'Zimbabwe' },
      ];
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSearchLocalCategorySearch1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Types',
    title2: 'Local Category Search',
    description: 'A search can look for category results inside a static local source.',
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
      '            type: \'category\',\n' +
      '            source: categoryContent\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="hidden code" data-type="javascript">\n' +
      '      var categoryContent = [\n' +
      '        { category: \'South America\', title: \'Brazil\' },\n' +
      '        { category: \'South America\', title: \'Peru\' },\n' +
      '        { category: \'North America\', title: \'Canada\' },\n' +
      '        { category: \'Asia\', title: \'South Korea\' },\n' +
      '        { category: \'Asia\', title: \'Japan\' },\n' +
      '        { category: \'Asia\', title: \'China\' },\n' +
      '        { category: \'Europe\', title: \'Denmark\' },\n' +
      '        { category: \'Europe\', title: \'England\' },\n' +
      '        { category: \'Europe\', title: \'France\' },\n' +
      '        { category: \'Europe\', title: \'Germany\' },\n' +
      '        { category: \'Africa\', title: \'Ethiopia\' },\n' +
      '        { category: \'Africa\', title: \'Nigeria\' },\n' +
      '        { category: \'Africa\', title: \'Zimbabwe\' },\n' +
      '      ];\n' +
      '      </div>\n',
  },
};
</script>
