<template>
  <div>
    <FuiSegment inverted>
      <FuiList inverted relaxed divided>
        <FuiItem>
          <FuiContent header="Snickerdoodle">
            An excellent companion
          </FuiContent>
        </FuiItem>
        <FuiItem>
          <FuiContent header="Poodle">
            A poodle, its pretty basic
          </FuiContent>
        </FuiItem>
        <FuiItem>
          <FuiContent header="Paulo">
            He's also a dog
          </FuiContent>
        </FuiItem>
      </FuiList>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementListInverted1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A list can be inverted to appear on a dark background',
    model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui inverted relaxed divided list">\n' +
      '        <div class="item">\n' +
      '          <div class="content">\n' +
      '            <div class="header">Snickerdoodle</div>\n' +
      '            An excellent companion\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="item">\n' +
      '          <div class="content">\n' +
      '            <div class="header">Poodle</div>\n' +
      '            A poodle, its pretty basic\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="item">\n' +
      '          <div class="content">\n' +
      '            <div class="header">Paulo</div>\n' +
      '            He\'s also a dog\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
