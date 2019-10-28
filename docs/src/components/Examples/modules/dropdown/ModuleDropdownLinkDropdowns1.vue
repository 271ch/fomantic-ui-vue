<template>
  <div>
      <div class="ignored">
        <p>Dropdowns support different default actions that can occur when an item is selected. For example, you can set your dropdown not to change its text, or select a value from its menu.</p>
        <div class="evaluated code" data-type="javascript">
        $('.link.example .dropdown')
          .dropdown({
            action: 'hide'
          })
        ;
        </div>
      </div>
      <div class="ui hidden divider"/>
      <div class="ui floating dropdown button">
        <div class="text">Go to</div>
        <i class="dropdown icon"/>
        <div class="menu">
          <a class="item" href="#link1"><i class="home icon"/> Home</a>
          <a class="item" href="#link2"><i class="users icon"/> Browse</a>
          <a class="item" href="#link3"><i class="search icon"/> Search</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownLinkDropdowns1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Adjusting Actions',
    title2: 'Link Dropdowns',
    description: '???',
    model: '      <div class="ignored">\n' +
      '        <p>Dropdowns support different default actions that can occur when an item is selected. For example, you can set your dropdown not to change its text, or select a value from its menu.</p>\n' +
      '        <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.link.example .dropdown\')\n' +
      '          .dropdown({\n' +
      '            action: \'hide\'\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui hidden divider"/>\n' +
      '      <div class="ui floating dropdown button">\n' +
      '        <div class="text">Go to</div>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '          <a class="item" href="#link1"><i class="home icon"/> Home</a>\n' +
      '          <a class="item" href="#link2"><i class="users icon"/> Browse</a>\n' +
      '          <a class="item" href="#link3"><i class="search icon"/> Search</a>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
