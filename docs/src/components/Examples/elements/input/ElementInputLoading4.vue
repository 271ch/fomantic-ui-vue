<template>
  <div>
    <FuiInput placeholder="Search..." icon color=red loading="fast elastic">
      <FuiIcon name=search></FuiIcon>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLoading4',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'States',
    title2: 'Loading',
    description: 'An icon input field can show that it is currently loading data',
    model: '    <div class="ui icon red fast elastic loading input">\n' +
      '        <input type="text" placeholder="Search...">\n' +
      '        <i class="search icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
