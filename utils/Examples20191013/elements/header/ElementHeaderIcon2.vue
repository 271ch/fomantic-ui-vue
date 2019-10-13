<template>
  <div>
    <h2 class="ui header">
      <i class="settings icon"/>
      <div class="content">
        Account Settings
        <div class="sub header">Manage your preferences</div>
      </div>
    </h2>
    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderIcon2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'header',
      title1: 'Content',
      title2: 'Icon',
      description: 'A header may contain an',
      model: '    <h2 class="ui header">\n' +
      '      <i class="settings icon"/>\n' +
      '      <div class="content">\n' +
      '        Account Settings\n' +
      '        <div class="sub header">Manage your preferences</div>\n' +
      '      </div>\n' +
      '    </h2>\n' +
      '    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n',
    };
  },
};
</script>
