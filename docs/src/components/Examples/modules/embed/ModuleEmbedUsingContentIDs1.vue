<template>
  <div>
      <div class="code" data-type="javascript" data-demo="true">
        $('.content.example .ui.embed').embed();
      </div>
      <div class="code" data-type="html" data-preview="true">
        <div class="ui embed" data-source="youtube" data-id="O6Xo21L0ybE"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleEmbedUsingContentIDs1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'embed',
    title1: 'Initializing',
    title2: 'Using Content IDs',
    description: 'Embed is designed to automatically generate urls from content ids. This way your site\'s backend can store meaningful content metadata and not worry about generating urls.',
    model: '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'.content.example .ui.embed\').embed();\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-preview="true">\n' +
      '        <div class="ui embed" data-source="youtube" data-id="O6Xo21L0ybE"/>\n' +
      '      </div>\n',
  },
};
</script>
