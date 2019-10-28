<template>
  <div>
      <div class="ui ignored info message">
        Dropdowns can support content that may not be allowed inside <code>option</code> tags when converting <code>select</code> elements. For more complex content like <code>flags</code> or <code>icons</code> you can use full dropdown markup
      </div>
      <div class="ui fluid multiple search selection dropdown">
        <input type="hidden" name="country"/>
        <i class="dropdown icon"/>
        <div class="default text">Select Country</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownMultipleSearchSelection2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Multiple Search Selection',
    description: 'A selection dropdown can allow multiple search selections',
    model: '      <div class="ui ignored info message">\n' +
      '        Dropdowns can support content that may not be allowed inside <code>option</code> tags when converting <code>select</code> elements. For more complex content like <code>flags</code> or <code>icons</code> you can use full dropdown markup\n' +
      '      </div>\n' +
      '      <div class="ui fluid multiple search selection dropdown">\n' +
      '        <input type="hidden" name="country"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Select Country</div>\n' +
      '      </div>\n',
  },
};
</script>
