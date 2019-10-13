<template>
  <div>
    <div class="ui top attached tabular menu">
      <a class="active item">
        Tab 1
      </a>
      <a class="item">
        Tab 2
      </a>
    </div>
    <div class="ui bottom attached segment">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuAttached1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'menu',
      title1: 'Variations',
      title2: 'Attached',
      description: 'A menu may be attached to other content segments',
      model: '    <div class="ui top attached tabular menu">\n' +
      '      <a class="active item">\n' +
      '        Tab 1\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Tab 2\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <div class="ui bottom attached segment">\n' +
      '      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n' +
      '    </div>\n',
    };
  },
};
</script>
