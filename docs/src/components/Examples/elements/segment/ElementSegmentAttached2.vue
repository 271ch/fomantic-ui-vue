<template>
  <div>
    <FuiHeader level=5 attached=top>
      Dogs
    </FuiHeader>
    <FuiSegment attached>
      <p>Dogs are one type of animal</p>
    </FuiSegment>
    <FuiHeader level=5 attached>
      Cats
    </FuiHeader>
    <FuiSegment attached>
      <p>Cats are thought of as being related to dogs, but only humans think this.</p>
    </FuiSegment>
    <FuiHeader level=5 attached>
      Lions
    </FuiHeader>
    <FuiSegment attached>
      <p>Humans don't think of lions as being like cats, but they are.</p>
    </FuiSegment>
    <FuiMessage attached=bottom warning iconName=warning>
      You've reached the end of this content segment!
    </FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentAttached2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Variations',
    title2: 'Attached',
    description: 'A segment can be attached to other content on a page',
    model: '    <h5 class="ui top attached header">\n' +
      '      Dogs\n' +
      '    </h5>\n' +
      '    <div class="ui attached segment">\n' +
      '      <p>Dogs are one type of animal</p>\n' +
      '    </div>\n' +
      '    <h5 class="ui attached header">\n' +
      '      Cats\n' +
      '    </h5>\n' +
      '    <div class="ui attached segment">\n' +
      '      <p>Cats are thought of as being related to dogs, but only humans think this.</p>\n' +
      '    </div>\n' +
      '    <h5 class="ui attached header">\n' +
      '      Lions\n' +
      '    </h5>\n' +
      '    <div class="ui attached segment">\n' +
      '      <p>Humans don\'t think of lions as being like cats, but they are.</p>\n' +
      '    </div>\n' +
      '    <div class="ui bottom attached warning message">\n' +
      '      <i class="warning icon"></i>\n' +
      '      You\'ve reached the end of this content segment!\n' +
      '    </div>\n',
  },
};
</script>
