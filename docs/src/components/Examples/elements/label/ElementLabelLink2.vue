<template>
  <div>
    <FuiLabel detailA="View Mail">
      <FuiIcon name=mail></FuiIcon>
      23
    </FuiLabel>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelLink2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Content',
    title2: 'Link',
    description: 'A label can be a link or contain an item that links',
    model: '    <div class="ui label">\n' +
      '      <i class="mail icon"></i>\n' +
      '      23\n' +
      '      <a class="detail">View Mail</a>\n' +
      '    </div>\n',
  },
};
</script>
