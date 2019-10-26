<template>
  <div>
    <FuiMenu size=large vertical>
      <FuiItem a active>
        <FuiLabel size=small color=teal>1</FuiLabel>
        Inbox
      </FuiItem>
      <FuiItem a>
        <FuiLabel size=small>51</FuiLabel>
        Spam
      </FuiItem>
      <FuiItem a>
        <FuiLabel size=small>1</FuiLabel>
        Updates
      </FuiItem>
      <FuiItem>
        <FuiInput icon placeholder="Search mail...">
          <FuiIcon name=search></FuiIcon>
        </FuiInput>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenu3',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: '???',
    description: 'A vertical menu can also vary in size',
    model: '    <div class="ui large vertical menu">\n' +
      '      <a class="active item">\n' +
      '        <div class="ui teal small label">1</div>\n' +
      '        Inbox\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <div class="ui small label">51</div>\n' +
      '        Spam\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <div class="ui small label">1</div>\n' +
      '        Updates\n' +
      '      </a>\n' +
      '      <div class="item">\n' +
      '        <div class="ui icon input">\n' +
      '          <input type="text" placeholder="Search mail...">\n' +
      '          <i class="search icon"></i>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
