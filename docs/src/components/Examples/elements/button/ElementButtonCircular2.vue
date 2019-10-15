<template>
  <div>
    <FuiButton circular social=facebook icon>
      <FuiIcon name=facebook></FuiIcon>
    </FuiButton>
    <FuiButton circular social=twitter icon>
      <FuiIcon name=twitter></FuiIcon>
    </FuiButton>
    <FuiButton circular social=linkedin icon>
      <FuiIcon name=linkedin></FuiIcon>
    </FuiButton>
    <FuiButton circular social="google plus" icon>
      <FuiIcon name="google plus"></FuiIcon>
    </FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonCircular2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Variations',
    title2: 'Circular',
    description: 'A button can be circular',
    model: '    <button class="ui circular facebook icon button">\n' +
      '      <i class="facebook icon"/>\n' +
      '    </button>\n' +
      '    <button class="ui circular twitter icon button">\n' +
      '      <i class="twitter icon"/>\n' +
      '    </button>\n' +
      '    <button class="ui circular linkedin icon button">\n' +
      '      <i class="linkedin icon"/>\n' +
      '    </button>\n' +
      '    <button class="ui circular google plus icon button">\n' +
      '      <i class="google plus icon"/>\n' +
      '    </button>\n',
  },
};
</script>
