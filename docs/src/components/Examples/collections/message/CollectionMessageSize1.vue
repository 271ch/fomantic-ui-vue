<template>
  <div>
    <FuiMessage size=mini>
      This is a mini message.
    </FuiMessage>
    <FuiMessage size=tiny>
      This is a tiny message.
    </FuiMessage>
    <FuiMessage size=small>
      This is a small message.
    </FuiMessage>
    <FuiMessage size=large>
      This is large
    </FuiMessage>
    <FuiMessage size=big>
      This is big
    </FuiMessage>
    <FuiMessage size=huge>
      This is huge
    </FuiMessage>
    <FuiMessage size=massive>
      This is massive
    </FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageSize1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'message',
    title1: 'Variations',
    title2: 'Size',
    description: 'A message can have different sizes',
    model: '    <div class="ui mini message">\n' +
      '      This is a mini message.\n' +
      '    </div>\n' +
      '    <div class="ui tiny message">\n' +
      '      This is a tiny message.\n' +
      '    </div>\n' +
      '    <div class="ui small message">\n' +
      '      This is a small message.\n' +
      '    </div>\n' +
      '    <div class="ui large message">\n' +
      '      This is large\n' +
      '    </div>\n' +
      '    <div class="ui big message">\n' +
      '      This is big\n' +
      '    </div>\n' +
      '    <div class="ui huge message">\n' +
      '      This is huge\n' +
      '    </div>\n' +
      '    <div class="ui massive message">\n' +
      '      This is massive\n' +
      '    </div>\n',
  },
};
</script>
