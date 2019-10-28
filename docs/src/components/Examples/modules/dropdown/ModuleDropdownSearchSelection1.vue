<template>
  <div>
      <div class="ui fluid search selection dropdown">
        <input type="hidden" name="country"/>
        <i class="dropdown icon"/>
        <div class="default text">Select Country</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSearchSelection1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Search Selection',
    description: 'A selection dropdown can allow a user to search through a large list of choices.',
    model: '      <div class="ui fluid search selection dropdown">\n' +
      '        <input type="hidden" name="country"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Select Country</div>\n' +
      '      </div>\n',
  },
};
</script>
