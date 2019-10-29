<template>
  <div>
    <FuiMenu compact>
      <FuiItem a iconName=mail>
        Messages
        <FuiLabel floating color=red>22</FuiLabel>
      </FuiItem>
      <FuiItem a iconName=users>
        Friends
        <FuiLabel floating color=teal>22</FuiLabel>
      </FuiItem>
    </FuiMenu>
    <br><br>
    <FuiMenu compact>
      <FuiItem a iconName=mail>
        Messages
        <FuiLabel floating color=red>22 Mails</FuiLabel>
      </FuiItem>
      <FuiItem a iconName=users>
        Friends
        <FuiLabel floating color=teal>22 Friends</FuiLabel>
      </FuiItem>
    </FuiMenu>
    <br><br>
    <FuiLabel color=black pointing=bottom>New in 2.7.2</FuiLabel>
    <br>
    <FuiMenu compact>
      <FuiItem a iconName=mail>
        Messages
        <FuiLabel floating=bottom color=red>22</FuiLabel>
      </FuiItem>
      <FuiItem a iconName=users>
        Friends
        <FuiLabel floating=bottom color=teal>22</FuiLabel>
      </FuiItem>
    </FuiMenu>
    <br><br>
    <FuiMenu compact>
      <FuiItem a iconName=mail>
        Messages
        <FuiLabel floating=bottom color=red>22 Mails</FuiLabel>
      </FuiItem>
      <FuiItem a iconName=users>
        Friends
        <FuiLabel floating=bottom color=teal>22 Friends</FuiLabel>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelFloating1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Floating',
    description: 'A label can float above or below another element.',
    model: '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        <i class="mail icon"></i> Messages\n' +
      '        <div class="ui red floating label">22</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="users icon"></i> Friends\n' +
      '        <div class="ui teal floating label">22</div>\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <br><br>\n' +
      '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        <i class="mail icon"></i> Messages\n' +
      '        <div class="ui red floating label">22 Mails</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="users icon"></i> Friends\n' +
      '        <div class="ui teal floating label">22 Friends</div>\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <br><br>\n' +
      '    <div class="ui bottom pointing black label">New in 2.7.2</div>\n' +
      '    <br>\n' +
      '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        <i class="mail icon"></i> Messages\n' +
      '        <div class="ui red bottom floating label">22</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="users icon"></i> Friends\n' +
      '        <div class="ui teal bottom floating label">22</div>\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <br><br>\n' +
      '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        <i class="mail icon"></i> Messages\n' +
      '        <div class="ui red bottom floating label">22 Mails</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="users icon"></i> Friends\n' +
      '        <div class="ui teal bottom floating label">22 Friends</div>\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
