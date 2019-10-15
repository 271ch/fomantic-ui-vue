<template>
  <div>
    <FuiButton primary basic>Primary</FuiButton>
    <FuiButton secondary basic>Secondary</FuiButton>
    <FuiButton positive basic>Positive</FuiButton>
    <FuiButton negative basic>Negative</FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonBasic2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Types',
    title2: 'Basic',
    description: 'A basic button is less pronounced',
    model: '    <button class="ui primary basic button">Primary</button>\n' +
      '    <button class="ui secondary basic button">Secondary</button>\n' +
      '    <button class="ui positive basic button">Positive</button>\n' +
      '    <button class="ui negative basic button">Negative</button>\n',
  },
};
</script>
