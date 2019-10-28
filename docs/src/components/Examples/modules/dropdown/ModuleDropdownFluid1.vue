<template>
  <div>
      <div class="ui vertical menu">
        <a class="item">Link 1</a>
        <a class="item">Link 2</a>
        <div class="header item">All Sections</div>
        <div class="ui item">
          <div class="ui fluid selection dropdown">
            <div class="text">More</div>
            <i class="dropdown icon"/>
            <div class="menu">
              <div class="item">Choice 1</div>
              <div class="item">Choice 2</div>
              <div class="item">Choice 3</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownFluid1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Variations',
    title2: 'Fluid',
    description: 'A dropdown can take the full width of its parent',
    model: '      <div class="ui vertical menu">\n' +
      '        <a class="item">Link 1</a>\n' +
      '        <a class="item">Link 2</a>\n' +
      '        <div class="header item">All Sections</div>\n' +
      '        <div class="ui item">\n' +
      '          <div class="ui fluid selection dropdown">\n' +
      '            <div class="text">More</div>\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <div class="menu">\n' +
      '              <div class="item">Choice 1</div>\n' +
      '              <div class="item">Choice 2</div>\n' +
      '              <div class="item">Choice 3</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
