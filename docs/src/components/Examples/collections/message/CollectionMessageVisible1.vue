<template>
  <div>
    <FuiMessage visible>
      <p>You can always see me</p>
    </FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageVisible1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'message',
    title1: 'States',
    title2: 'Visible',
    description: 'A message can be set to visible to force itself to be shown.',
    model: '    <div class="ui visible message">\n' +
      '      <p>You can always see me</p>\n' +
      '    </div>\n',
  },
};
</script>
