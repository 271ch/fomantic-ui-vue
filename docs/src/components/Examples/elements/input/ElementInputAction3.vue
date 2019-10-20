<template>
  <div>
    <div class="ui right action left icon input">
      <i class="search icon"></i>
      <input type="text" placeholder="Search"/>
      <div class="ui basic floating dropdown button">
        <div class="text">This Page</div>
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item">This Organization</div>
          <div class="item">Entire Site</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputAction3',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Action',
    description: 'An input can be formatted to alert the user to an action they may perform',
    model: '    <div class="ui right action left icon input">\n' +
      '      <i class="search icon"></i>\n' +
      '      <input type="text" placeholder="Search"/>\n' +
      '      <div class="ui basic floating dropdown button">\n' +
      '        <div class="text">This Page</div>\n' +
      '        <i class="dropdown icon"></i>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">This Organization</div>\n' +
      '          <div class="item">Entire Site</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
