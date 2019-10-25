<template>
  <div>
    <FuiInput labeled=right placeholder="Amount" id="amount">
      <template #before>
        <FuiLabel tag=label for="amount">
          $
        </FuiLabel>
      </template>
      <FuiLabel basic>
        .00
      </FuiLabel>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLabeled4',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Labeled',
    description: 'An input can be formatted with a label',
    model: '    <div class="ui right labeled input">\n' +
      '      <label class="ui label" for="amount">$</label>\n' +
      '      <input id="amount" type="text" placeholder="Amount">\n' +
      '      <div class="ui basic label">.00</div>\n' +
      '    </div>\n',
  },
};
</script>
