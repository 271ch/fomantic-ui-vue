<template>
  <div>
    <FuiList>
      <FuiItem iconName=users>
        <FuiContent>
          Semantic UI
        </FuiContent>
      </FuiItem>
      <FuiItem iconName=marker>
        <FuiContent>
          New York, NY
        </FuiContent>
      </FuiItem>
      <FuiItem iconName=mail>
        <FuiContent>
          <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
        </FuiContent>
      </FuiItem>
      <FuiItem iconName=linkify>
        <FuiContent>
          <a href="http://www.semantic-ui.com">semantic-ui.com</a>
        </FuiContent>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListList2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Types',
    title2: 'List',
    description: 'A list groups related content',
    model: '    <div class="ui list">\n' +
      '      <div class="item">\n' +
      '        <i class="users icon"></i>\n' +
      '        <div class="content">\n' +
      '          Semantic UI\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <i class="marker icon"></i>\n' +
      '        <div class="content">\n' +
      '          New York, NY\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <i class="mail icon"></i>\n' +
      '        <div class="content">\n' +
      '          <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <i class="linkify icon"></i>\n' +
      '        <div class="content">\n' +
      '          <a href="http://www.semantic-ui.com">semantic-ui.com</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
