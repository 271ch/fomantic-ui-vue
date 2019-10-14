<template>
  <div>
    <div class="ui ignored info message"><code>elastic</code> as loading style is currently not supported  because form uses the <code>:before</code> pseudoclass to dimm the background.</div>
    <div class="ui loading form">
      <div class="field">
        <label>E-mail</label>
        <input type="email" placeholder="joe@schmoe.com"/>
      </div>
      <div class="ui submit button">Submit</div>
    </div>
    <div class="ui blue double loading form">
      <div class="field">
          <label>E-mail</label>
          <input type="email" placeholder="joe@schmoe.com"/>
      </div>
    <div class="ui submit button">Submit</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormLoading1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'form',
    title1: 'States',
    title2: 'Loading',
    description: 'If a form is in loading state, it will automatically show a loading indicator.',
    model: '    <div class="ui ignored info message"><code>elastic</code> as loading style is currently not supported  because form uses the <code>:before</code> pseudoclass to dimm the background.</div>\n' +
      '    <div class="ui loading form">\n' +
      '      <div class="field">\n' +
      '        <label>E-mail</label>\n' +
      '        <input type="email" placeholder="joe@schmoe.com"/>\n' +
      '      </div>\n' +
      '      <div class="ui submit button">Submit</div>\n' +
      '    </div>\n' +
      '    <div class="ui blue double loading form">\n' +
      '      <div class="field">\n' +
      '          <label>E-mail</label>\n' +
      '          <input type="email" placeholder="joe@schmoe.com"/>\n' +
      '      </div>\n' +
      '    <div class="ui submit button">Submit</div>\n' +
      '  </div>\n',
  },
};
</script>
