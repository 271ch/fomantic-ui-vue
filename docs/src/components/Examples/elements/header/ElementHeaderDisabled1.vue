<template>
  <div>
    <FuiHeader disabled>
      Disabled Header
    </FuiHeader>
    <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderDisabled1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'header',
    title1: 'States',
    title2: 'Disabled',
    description: 'A header can show that it is inactive',
    model: '    <div class="ui disabled header">\n' +
      '      Disabled Header\n' +
      '    </div>\n' +
      '    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n',
  },
};
</script>
