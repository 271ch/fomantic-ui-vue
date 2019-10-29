<template>
  <div>
    <FuiMenu compact>
      <FuiItem a iconName=mail>
        Messages
        <FuiLabel floating=left color=red>22</FuiLabel>
      </FuiItem>
      <FuiItem a iconName=users>
        Friends
        <FuiLabel floating=left color=teal>22</FuiLabel>
      </FuiItem>
    </FuiMenu>
    <br><br>
    <FuiMenu compact>
      <FuiItem a iconName=mail>
        Messages
        <FuiLabel floating=left color=red>22 Mails</FuiLabel>
      </FuiItem>
      <FuiItem a iconName=users>
        Friends
        <FuiLabel floating=left color=teal>22 Friends</FuiLabel>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelFloatingleft1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Floating left',
    description: 'Floating Labels can be positioned to the left also',
    model: '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        <i class="mail icon"></i> Messages\n' +
      '        <div class="ui red left floating label">22</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="users icon"></i> Friends\n' +
      '        <div class="ui teal left floating label">22</div>\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <br><br>\n' +
      '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        <i class="mail icon"></i> Messages\n' +
      '        <div class="ui red left floating label">22 Mails</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="users icon"></i> Friends\n' +
      '        <div class="ui teal left floating label">22 Friends</div>\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
