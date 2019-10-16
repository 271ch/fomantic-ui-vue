<template>
  <div>
    <FuiButtons size=small basic icon>
      <FuiButton><FuiIcon name=file></FuiIcon></FuiButton>
      <FuiButton><FuiIcon name=save></FuiIcon></FuiButton>
      <FuiButton><FuiIcon name=upload></FuiIcon></FuiButton>
      <FuiButton><FuiIcon name=download></FuiIcon></FuiButton>
    </FuiButtons>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonGroupSizes2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Group Sizes',
    description: 'Groups can have a shared size',
    model: '    <div class="ui small basic icon buttons">\n' +
      '      <button class="ui button"><i class="file icon"/></button>\n' +
      '      <button class="ui button"><i class="save icon"/></button>\n' +
      '      <button class="ui button"><i class="upload icon"/></button>\n' +
      '      <button class="ui button"><i class="download icon"/></button>\n' +
      '    </div>\n',
  },
};
</script>
