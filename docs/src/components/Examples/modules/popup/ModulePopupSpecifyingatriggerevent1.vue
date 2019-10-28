<template>
  <div>
      <div class="evaluated code">
    $('.example .teal.button')
      .popup({
        on: 'click'
      })
    ;
    $('.example input')
      .popup({
        on: 'focus'
      })
    ;
      </div>
      <div class="ui teal button" data-title="Using click events" data-content="Clicked popups will close if you click away, but not if you click inside the popup">Click Me</div>
      <div class="ui icon input">
        <input type="text" placeholder="Focus me..." data-content="You can use me to enter data"/>
        <i class="search icon"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupSpecifyingatriggerevent1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Examples',
    title2: 'Specifying a trigger event',
    description: 'A popup trigger event can be specified',
    model: '      <div class="evaluated code">\n' +
      '    $(\'.example .teal.button\')\n' +
      '      .popup({\n' +
      '        on: \'click\'\n' +
      '      })\n' +
      '    ;\n' +
      '    $(\'.example input\')\n' +
      '      .popup({\n' +
      '        on: \'focus\'\n' +
      '      })\n' +
      '    ;\n' +
      '      </div>\n' +
      '      <div class="ui teal button" data-title="Using click events" data-content="Clicked popups will close if you click away, but not if you click inside the popup">Click Me</div>\n' +
      '      <div class="ui icon input">\n' +
      '        <input type="text" placeholder="Focus me..." data-content="You can use me to enter data"/>\n' +
      '        <i class="search icon"/>\n' +
      '      </div>\n',
  },
};
</script>
