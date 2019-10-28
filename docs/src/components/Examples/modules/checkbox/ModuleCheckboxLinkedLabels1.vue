<template>
  <div>
      <div class="ui checkbox">
        <input id="example-id" type="checkbox"/>
        <label for="example-id">Label</label>
      </div>
      <div class="code" data-type="html">
        <div class="ui checkbox">
          <input id="example-id" type="checkbox"/>
          <label for="example-id">Label</label>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxLinkedLabels1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Initializing',
    title2: 'Linked Labels',
    description: 'If you just need labels to link without any other features of Javascript checkboxes, you can match the',
    model: '      <div class="ui checkbox">\n' +
      '        <input id="example-id" type="checkbox"/>\n' +
      '        <label for="example-id">Label</label>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <div class="ui checkbox">\n' +
      '          <input id="example-id" type="checkbox"/>\n' +
      '          <label for="example-id">Label</label>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
