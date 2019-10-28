<template>
  <div>
      <div class="ui red slow double loading fluid multiple search selection dropdown">
        <input type="hidden" name="country" value="kp"/>
        <i class="dropdown icon"/>
        <input class="search"/>
        <div class="default text">Search...</div>
        <div class="menu">
          <div class="item">Choice 1</div>
          <div class="item">Choice 2</div>
          <div class="item">Choice 3</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownLoading2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'States',
    title2: 'Loading',
    description: 'A dropdown can show that it is currently loading data',
    model: '      <div class="ui red slow double loading fluid multiple search selection dropdown">\n' +
      '        <input type="hidden" name="country" value="kp"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <input class="search"/>\n' +
      '        <div class="default text">Search...</div>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">Choice 1</div>\n' +
      '          <div class="item">Choice 2</div>\n' +
      '          <div class="item">Choice 3</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
