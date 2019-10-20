<template>
  <div>
    <div class="ui inverted segment">
      <div class="ui inverted input">
        <input type="text" placeholder="Search..."/>
      </div>
      <div class="ui inverted divider"/>
      <div class="ui inverted left icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search icon"></i>
      </div>
      <div class="ui inverted divider"/>
      <div class="ui inverted transparent icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputInverted1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'An input can be formatted to appear on dark backgrounds',
    model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui inverted input">\n' +
      '        <input type="text" placeholder="Search..."/>\n' +
      '      </div>\n' +
      '      <div class="ui inverted divider"/>\n' +
      '      <div class="ui inverted left icon input">\n' +
      '        <input type="text" placeholder="Search..."/>\n' +
      '        <i class="search icon"></i>\n' +
      '      </div>\n' +
      '      <div class="ui inverted divider"/>\n' +
      '      <div class="ui inverted transparent icon input">\n' +
      '        <input type="text" placeholder="Search..."/>\n' +
      '        <i class="search icon"></i>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
