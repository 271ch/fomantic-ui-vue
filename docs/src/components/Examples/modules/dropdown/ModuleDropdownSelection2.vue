<template>
  <div>
      <select class="ui dropdown">
        <option value="">Gender</option>
        <option value="1">Male</option>
        <option value="0">Female</option>
      </select>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSelection2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Selection',
    description: 'A dropdown can be used to select between choices in a form',
    model: '      <select class="ui dropdown">\n' +
      '        <option value="">Gender</option>\n' +
      '        <option value="1">Male</option>\n' +
      '        <option value="0">Female</option>\n' +
      '      </select>\n',
  },
};
</script>
