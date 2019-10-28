<template>
  <div>
      <div class="ui loading search">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Search..."/>
          <i class="search icon"/>
        </div>
        <div class="results"/>
      </div>
      <br/><br/>
      <div class="ui blue loading double search">
        <div class="ui icon input">
            <input class="prompt" type="text" placeholder="Search..."/>
            <i class="search icon"/>
        </div>
        <div class="results"/>
      </div>
      <br/><br/>
      <div class="ui slow elastic pink loading search">
        <div class="ui icon input">
            <input class="prompt" type="text" placeholder="Search..."/>
            <i class="search icon"/>
        </div>
        <div class="results"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSearchLoading1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'States',
    title2: 'Loading',
    description: 'A search can show a loading indicator',
    model: '      <div class="ui loading search">\n' +
      '        <div class="ui icon input">\n' +
      '          <input class="prompt" type="text" placeholder="Search..."/>\n' +
      '          <i class="search icon"/>\n' +
      '        </div>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n' +
      '      <br/><br/>\n' +
      '      <div class="ui blue loading double search">\n' +
      '        <div class="ui icon input">\n' +
      '            <input class="prompt" type="text" placeholder="Search..."/>\n' +
      '            <i class="search icon"/>\n' +
      '        </div>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n' +
      '      <br/><br/>\n' +
      '      <div class="ui slow elastic pink loading search">\n' +
      '        <div class="ui icon input">\n' +
      '            <input class="prompt" type="text" placeholder="Search..."/>\n' +
      '            <i class="search icon"/>\n' +
      '        </div>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n',
  },
};
</script>
