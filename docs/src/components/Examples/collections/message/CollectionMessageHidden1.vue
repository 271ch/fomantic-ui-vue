<template>
  <div>
    <FuiMessage hidden>
      <p>You can't see me</p>
    </FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageHidden1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'message',
    title1: 'States',
    title2: 'Hidden',
    description: 'A message can be hidden',
    model: '    <div class="ui hidden message">\n' +
      '        <p>You can\'t see me</p>\n' +
      '      </div>\n',
  },
};
</script>
