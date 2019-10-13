<template>
  <div>
    <h2 class="ui icon header">
      <i class="settings icon"/>
      <div class="content">
        Account Settings
        <div class="sub header">Manage your account settings and set e-mail preferences.</div>
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderIconHeaders1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'header',
      title1: 'Types',
      title2: 'Icon Headers',
      description: 'A header can be formatted to emphasize an icon',
      model: '    <h2 class="ui icon header">\n' +
      '      <i class="settings icon"/>\n' +
      '      <div class="content">\n' +
      '        Account Settings\n' +
      '        <div class="sub header">Manage your account settings and set e-mail preferences.</div>\n' +
      '      </div>\n' +
      '    </h2>\n',
    };
  },
};
</script>
