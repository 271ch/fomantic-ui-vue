<template>
  <div>
      <div class="code" data-type="javascript" data-demo="true">
        $('#example1').progress();
      </div>
      <div class="code" data-type="html" data-preview="true">
        <div class="ui teal progress" data-percent="74" id="example1">
          <div class="bar"/>
          <div class="label">74% Funded</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressWithmetadata1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Initializing a progress bar',
    title2: 'With metadata',
    description: 'A progress bar can be initialized with metadata',
    model: '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'#example1\').progress();\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-preview="true">\n' +
      '        <div class="ui teal progress" data-percent="74" id="example1">\n' +
      '          <div class="bar"/>\n' +
      '          <div class="label">74% Funded</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
