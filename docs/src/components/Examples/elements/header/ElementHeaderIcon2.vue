<template>
  <div>
    <FuiHeader level=2>
      <FuiIcon name=settings></FuiIcon>
      <FuiContent>
        Account Settings
        <FuiHeader sub>Manage your preferences</FuiHeader>
      </FuiContent>
    </FuiHeader>
    <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderIcon2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'header',
    title1: 'Content',
    title2: 'Icon',
    description: 'A header may contain an',
    model: '    <h2 class="ui header">\n' +
      '      <i class="settings icon"></i>\n' +
      '      <div class="content">\n' +
      '        Account Settings\n' +
      '        <div class="sub header">Manage your preferences</div>\n' +
      '      </div>\n' +
      '    </h2>\n' +
      '    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n',
  },
};
</script>
