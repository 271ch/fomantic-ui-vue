<template>
  <div>
    <FuiButton loading>Loading</FuiButton>
    <FuiButton basic loading>Loading</FuiButton>
    <FuiButton primary loading>Loading</FuiButton>
    <FuiButton secondary loading>Loading</FuiButton>
    <br/>
    <br/>
    <FuiButton double loading>Loading</FuiButton>
    <FuiButton basic double loading>Loading</FuiButton>
    <FuiButton primary double loading>Loading</FuiButton>
    <FuiButton secondary double loading>Loading</FuiButton>
    <br/>
    <br/>
    <FuiButton elastic loading>Loading</FuiButton>
    <FuiButton basic elastic loading>Loading</FuiButton>
    <FuiButton primary elastic loading>Loading</FuiButton>
    <FuiButton secondary elastic loading>Loading</FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonLoading1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'States',
    title2: 'Loading',
    description: 'A button can show a loading indicator',
    model: '    <button class="ui loading button">Loading</button>\n' +
      '    <button class="ui basic loading button">Loading</button>\n' +
      '    <button class="ui primary loading button">Loading</button>\n' +
      '    <button class="ui secondary loading button">Loading</button>\n' +
      '    <br>\n' +
      '    <br>\n' +
      '    <button class="ui double loading button">Loading</button>\n' +
      '    <button class="ui basic double loading button">Loading</button>\n' +
      '    <button class="ui primary double loading button">Loading</button>\n' +
      '    <button class="ui secondary double loading button">Loading</button>\n' +
      '    <br>\n' +
      '    <br>\n' +
      '    <button class="ui elastic loading button">Loading</button>\n' +
      '    <button class="ui basic elastic loading button">Loading</button>\n' +
      '    <button class="ui primary elastic loading button">Loading</button>\n' +
      '    <button class="ui secondary elastic loading button">Loading</button>\n',
  },
};
</script>
