<template>
  <div>
      <div class="ui big selection dropdown">
        <input type="hidden" name="gender"/>
        <i class="dropdown icon"/>
        <div class="default text">Big</div>
        <div class="menu">
          <div class="item" data-value="1">Male</div>
          <div class="item" data-value="0">Female</div>
        </div>
      </div>
      <div class="ui huge selection dropdown">
        <input type="hidden" name="gender"/>
        <i class="dropdown icon"/>
        <div class="default text">Huge</div>
        <div class="menu">
          <div class="item" data-value="1">Male</div>
          <div class="item" data-value="0">Female</div>
        </div>
      </div>
      <div class="ui massive selection dropdown">
        <input type="hidden" name="gender"/>
        <i class="dropdown icon"/>
        <div class="default text">Massive</div>
        <div class="menu">
          <div class="item" data-value="1">Male</div>
          <div class="item" data-value="0">Female</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSize2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Variations',
    title2: 'Size',
    description: 'A dropdown can have different sizes',
    model: '      <div class="ui big selection dropdown">\n' +
      '        <input type="hidden" name="gender"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Big</div>\n' +
      '        <div class="menu">\n' +
      '          <div class="item" data-value="1">Male</div>\n' +
      '          <div class="item" data-value="0">Female</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui huge selection dropdown">\n' +
      '        <input type="hidden" name="gender"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Huge</div>\n' +
      '        <div class="menu">\n' +
      '          <div class="item" data-value="1">Male</div>\n' +
      '          <div class="item" data-value="0">Female</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui massive selection dropdown">\n' +
      '        <input type="hidden" name="gender"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Massive</div>\n' +
      '        <div class="menu">\n' +
      '          <div class="item" data-value="1">Male</div>\n' +
      '          <div class="item" data-value="0">Female</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
