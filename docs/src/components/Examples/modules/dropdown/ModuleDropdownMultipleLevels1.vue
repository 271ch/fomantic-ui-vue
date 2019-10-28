<template>
  <div>
      My favorite animal breed is
      <div class="ui inline dropdown">
        <input type="hidden" name="gender"/>
        <div class="text">Shiba Inu</div>
        <i class="dropdown icon"/>
        <div class="menu">
          <div class="item">
            <i class="dropdown icon"/>
            <span class="text">Dogs</span>
            <div class="menu">
              <div class="item">Shiba Inu</div>
              <div class="item">
                <i class="dropdown icon"/>
                <span class="text">Poodle</span>
                <div class="menu">
                  <div class="item">Toy</div>
                  <div class="item">Standard</div>
                </div>
              </div>
              <div class="item">Labrador</div>
            </div>
          </div>
          <div class="item">
            <i class="dropdown icon"/>
            <span class="text">Cats</span>
            <div class="menu">
              <div class="item">Aegean</div>
              <div class="item">Balinese</div>
              <div class="item">Persian</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownMultipleLevels1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Menus',
    title2: 'Multiple Levels',
    description: 'A dropdown menu can also contain sub menus inside of it',
    model: '      My favorite animal breed is\n' +
      '      <div class="ui inline dropdown">\n' +
      '        <input type="hidden" name="gender"/>\n' +
      '        <div class="text">Shiba Inu</div>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <span class="text">Dogs</span>\n' +
      '            <div class="menu">\n' +
      '              <div class="item">Shiba Inu</div>\n' +
      '              <div class="item">\n' +
      '                <i class="dropdown icon"/>\n' +
      '                <span class="text">Poodle</span>\n' +
      '                <div class="menu">\n' +
      '                  <div class="item">Toy</div>\n' +
      '                  <div class="item">Standard</div>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '              <div class="item">Labrador</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <span class="text">Cats</span>\n' +
      '            <div class="menu">\n' +
      '              <div class="item">Aegean</div>\n' +
      '              <div class="item">Balinese</div>\n' +
      '              <div class="item">Persian</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
