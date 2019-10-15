<template>
  <div>
    <div class="existing code">
      <div class="ui hidden message">
        <p>You can't see me</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageHidden1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'message',
    title1: 'States',
    title2: 'Hidden',
    description: 'A message can be hidden',
    model: '    <div class="existing code">\n' +
      '      <div class="ui hidden message">\n' +
      '        <p>You can\'t see me</p>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
