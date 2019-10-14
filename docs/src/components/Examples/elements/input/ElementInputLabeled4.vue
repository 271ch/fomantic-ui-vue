<template>
  <div>
    <div class="ui right labeled input">
      <label for="amount" class="ui label">$</label>
      <input type="text" placeholder="Amount" id="amount"/>
      <div class="ui basic label">.00</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLabeled4',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Labeled',
    description: 'An input can be formatted with a label',
    model: '    <div class="ui right labeled input">\n' +
      '      <label for="amount" class="ui label">$</label>\n' +
      '      <input type="text" placeholder="Amount" id="amount"/>\n' +
      '      <div class="ui basic label">.00</div>\n' +
      '    </div>\n',
  },
};
</script>
