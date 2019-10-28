<template>
  <div>
      <div class="ui teal buttons">
        <div class="ui button">Save</div>
        <div class="ui floating dropdown icon button">
          <i class="dropdown icon"/>
          <div class="menu">
            <div class="item"><i class="edit icon"/> Edit Post</div>
            <div class="item"><i class="delete icon"/> Remove Post</div>
            <div class="item"><i class="hide icon"/> Hide Post</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownFloating1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Floating',
    description: 'A dropdown menu can appear to be floating below an element.',
    model: '      <div class="ui teal buttons">\n' +
      '        <div class="ui button">Save</div>\n' +
      '        <div class="ui floating dropdown icon button">\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="menu">\n' +
      '            <div class="item"><i class="edit icon"/> Edit Post</div>\n' +
      '            <div class="item"><i class="delete icon"/> Remove Post</div>\n' +
      '            <div class="item"><i class="hide icon"/> Hide Post</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
