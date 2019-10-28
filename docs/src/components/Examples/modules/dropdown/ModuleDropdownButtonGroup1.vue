<template>
  <div>
      <div class="ui icon buttons">
        <div class="ui top left pointing dropdown button">
          <i class="user icon"/>
          <div class="menu">
            <div class="item"><i class="edit icon"/>Edit User</div>
            <div class="item"><i class="delete icon"/>Remove User</div>
            <div class="item"><i class="hide icon"/>Make Invisible</div>
          </div>
        </div>
        <div class="ui top left pointing dropdown button">
          <i class="users icon"/>
          <div class="menu">
            <div class="item"><i class="edit icon"/>Edit Group</div>
            <div class="item"><i class="delete icon"/>Remove Group</div>
            <div class="item"><i class="hide icon"/>Hide from Group</div>
          </div>
        </div>
        <div class="ui top right pointing dropdown button">
          <i class="settings icon"/>
          <div class="menu">
            <div class="item"><i class="edit icon"/> Edit</div>
            <div class="item"><i class="delete icon"/> Remove</div>
            <div class="item"><i class="hide icon"/> Hide</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownButtonGroup1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Coupling',
    title2: 'Button Group',
    description: 'A',
    model: '      <div class="ui icon buttons">\n' +
      '        <div class="ui top left pointing dropdown button">\n' +
      '          <i class="user icon"/>\n' +
      '          <div class="menu">\n' +
      '            <div class="item"><i class="edit icon"/>Edit User</div>\n' +
      '            <div class="item"><i class="delete icon"/>Remove User</div>\n' +
      '            <div class="item"><i class="hide icon"/>Make Invisible</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="ui top left pointing dropdown button">\n' +
      '          <i class="users icon"/>\n' +
      '          <div class="menu">\n' +
      '            <div class="item"><i class="edit icon"/>Edit Group</div>\n' +
      '            <div class="item"><i class="delete icon"/>Remove Group</div>\n' +
      '            <div class="item"><i class="hide icon"/>Hide from Group</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="ui top right pointing dropdown button">\n' +
      '          <i class="settings icon"/>\n' +
      '          <div class="menu">\n' +
      '            <div class="item"><i class="edit icon"/> Edit</div>\n' +
      '            <div class="item"><i class="delete icon"/> Remove</div>\n' +
      '            <div class="item"><i class="hide icon"/> Hide</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
