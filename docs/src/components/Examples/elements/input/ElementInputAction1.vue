<template>
  <div>
    <FuiInput action>
      <input type="text" placeholder="Search..."/>
      <button class="ui button">Search</button>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputAction1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Action',
    description: 'An input can be formatted to alert the user to an action they may perform',
    model: '    <div class="ui action input">\n' +
      '      <input type="text" placeholder="Search..."/>\n' +
      '      <button class="ui button">Search</button>\n' +
      '    </div>\n',
  },
};
</script>
