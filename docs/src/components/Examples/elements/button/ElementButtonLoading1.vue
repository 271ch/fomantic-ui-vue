<template>
  <div>
    <button class="ui loading button">Loading</button>
    <button class="ui basic loading button">Loading</button>
    <button class="ui primary loading button">Loading</button>
    <button class="ui secondary loading button">Loading</button>
    <br/>
    <br/>
    <button class="ui double loading button">Loading</button>
    <button class="ui basic double loading button">Loading</button>
    <button class="ui primary double loading button">Loading</button>
    <button class="ui secondary double loading button">Loading</button>
    <br/>
    <br/>
    <button class="ui elastic loading button">Loading</button>
    <button class="ui basic elastic loading button">Loading</button>
    <button class="ui primary elastic loading button">Loading</button>
    <button class="ui secondary elastic loading button">Loading</button>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonLoading1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'States',
      title2: 'Loading',
      description: 'A button can show a loading indicator',
      model: '    <button class="ui loading button">Loading</button>\n' +
      '    <button class="ui basic loading button">Loading</button>\n' +
      '    <button class="ui primary loading button">Loading</button>\n' +
      '    <button class="ui secondary loading button">Loading</button>\n' +
      '    <br/>\n' +
      '    <br/>\n' +
      '    <button class="ui double loading button">Loading</button>\n' +
      '    <button class="ui basic double loading button">Loading</button>\n' +
      '    <button class="ui primary double loading button">Loading</button>\n' +
      '    <button class="ui secondary double loading button">Loading</button>\n' +
      '    <br/>\n' +
      '    <br/>\n' +
      '    <button class="ui elastic loading button">Loading</button>\n' +
      '    <button class="ui basic elastic loading button">Loading</button>\n' +
      '    <button class="ui primary elastic loading button">Loading</button>\n' +
      '    <button class="ui secondary elastic loading button">Loading</button>\n',
    };
  },
};
</script>
