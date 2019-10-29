<template>
  <div>
    <FuiMenu compact>
      <FuiItem a iconName=mail>
        Messages from Fomantic-UI-Users
        <FuiLabel aligned=left floating color=red>22 Mails unread</FuiLabel>
      </FuiItem>
      <FuiItem a iconName=users>
        Friends of the Fomantic-UI Community
        <FuiLabel aligned=right floating color=teal>22 Friends online</FuiLabel>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelFloatingaligned1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Floating aligned',
    description: 'Floating Labels containing large text can be aligned to the left or right',
    model: '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        <i class="mail icon"></i> Messages from Fomantic-UI-Users\n' +
      '        <div class="ui red left aligned floating label">22 Mails unread</div>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="users icon"></i> Friends of the Fomantic-UI Community\n' +
      '        <div class="ui teal right aligned floating label">22 Friends online</div>\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
