<template>
  <div>
      <div class="ui inverted segment">
        <div class="ui inverted selection dropdown">
          <input type="hidden" name="choices"/>
          <div class="default text">Select choice</div>
          <i class="dropdown icon"/>
          <div class="menu">
            <div class="item">Choice 1</div>
            <div class="item">Choice 2</div>
            <div class="item">Choice 3</div>
            <div class="item">Choice 4</div>
            <div class="item">Choice 5</div>
            <div class="item">Choice 6</div>
            <div class="item">Choice 7</div>
            <div class="item">Choice 8</div>
            <div class="item">Choice 9</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownInverted1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A dropdown can be inverted',
    model: '      <div class="ui inverted segment">\n' +
      '        <div class="ui inverted selection dropdown">\n' +
      '          <input type="hidden" name="choices"/>\n' +
      '          <div class="default text">Select choice</div>\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="menu">\n' +
      '            <div class="item">Choice 1</div>\n' +
      '            <div class="item">Choice 2</div>\n' +
      '            <div class="item">Choice 3</div>\n' +
      '            <div class="item">Choice 4</div>\n' +
      '            <div class="item">Choice 5</div>\n' +
      '            <div class="item">Choice 6</div>\n' +
      '            <div class="item">Choice 7</div>\n' +
      '            <div class="item">Choice 8</div>\n' +
      '            <div class="item">Choice 9</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
