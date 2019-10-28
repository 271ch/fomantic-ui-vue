<template>
  <div>
      <div class="code" data-type="javascript" data-demo="true">
        $('.metadata.example .ui.embed').embed();
      </div>
      <div class="code" data-type="html" data-preview="true">
        <div class="ui embed" data-source="youtube" data-id="O6Xo21L0ybE" data-icon="video" data-placeholder="/images/bear-waving.jpg"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleEmbedSpecifyingMetadata1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'embed',
    title1: 'Initializing',
    title2: 'Specifying Metadata',
    description: 'Other settings like icons and placeholder images can be specified in metadata overriding presets for a site.',
    model: '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'.metadata.example .ui.embed\').embed();\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-preview="true">\n' +
      '        <div class="ui embed" data-source="youtube" data-id="O6Xo21L0ybE" data-icon="video" data-placeholder="/images/bear-waving.jpg"/>\n' +
      '      </div>\n',
  },
};
</script>
