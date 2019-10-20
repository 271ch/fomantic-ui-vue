<template>
  <div>
    <div class="ui right labeled input">
      <input type="text" placeholder="Find domain"/>
      <div class="ui dropdown label">
        <div class="text">.com</div>
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item">.com</div>
          <div class="item">.net</div>
          <div class="item">.org</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLabeled2',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Labeled',
    description: 'An input can be formatted with a label',
    model: '    <div class="ui right labeled input">\n' +
      '      <input type="text" placeholder="Find domain"/>\n' +
      '      <div class="ui dropdown label">\n' +
      '        <div class="text">.com</div>\n' +
      '        <i class="dropdown icon"></i>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">.com</div>\n' +
      '          <div class="item">.net</div>\n' +
      '          <div class="item">.org</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
