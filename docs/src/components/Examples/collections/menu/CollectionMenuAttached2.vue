<template>
  <div>
    <FuiMenu attached=top>
      <FuiItem a active>
        Section 1
      </FuiItem>
      <FuiItem a>
        Section 2
      </FuiItem>
    </FuiMenu>
    <FuiSegment attached>
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    </FuiSegment>
    <FuiMenu attached=bottom>
      <FuiItem a active>
        Section 1
      </FuiItem>
      <FuiItem a>
        Section 2
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuAttached2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Attached',
    description: 'A menu may be attached to other content segments',
    model: '    <div class="ui top attached menu">\n' +
      '      <a class="active item">\n' +
      '        Section 1\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Section 2\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <div class="ui attached segment">\n' +
      '      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n' +
      '    </div>\n' +
      '    <div class="ui bottom attached menu">\n' +
      '      <a class="active item">\n' +
      '        Section 1\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Section 2\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
