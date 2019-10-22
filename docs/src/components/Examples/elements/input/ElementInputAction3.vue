<template>
  <div>
    <FuiInput action=right icon=left placeholder="Search">
      <template #before>
        <FuiIcon name=search></FuiIcon>
      </template>
      <FuiButton tag=div basic floating dropdown>
        <div class="text">This Page</div>
        <FuiIcon name=dropdown></FuiIcon>
        <div class="menu">
          <div class="item">This Organization</div>
          <div class="item">Entire Site</div>
        </div>
      </FuiButton>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputAction3',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Action',
    description: 'An input can be formatted to alert the user to an action they may perform',
    model: '    <div class="ui right action left icon input">\n' +
      '      <i class="search icon"></i>\n' +
      '      <input type="text" placeholder="Search">\n' +
      '      <div class="ui basic floating dropdown button">\n' +
      '        <div class="text">This Page</div>\n' +
      '        <i class="dropdown icon"></i>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">This Organization</div>\n' +
      '          <div class="item">Entire Site</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
