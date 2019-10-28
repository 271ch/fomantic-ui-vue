<template>
  <div>
      <div class="code" data-type="javascript" data-demo="true">
        $('#example4')
          .progress('increment')
        ;
      </div>
      <div class="code" data-type="html" data-preview="true">
        <div class="ui indicating progress" data-value="1" data-total="20" id="example4">
          <div class="bar">
            <div class="progress"/>
          </div>
          <div class="label">Adding Photos</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressInitializingwithMetadata1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Task Completion Percent',
    title2: 'Initializing with Metadata',
    description: '???',
    model: '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'#example4\')\n' +
      '          .progress(\'increment\')\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-preview="true">\n' +
      '        <div class="ui indicating progress" data-value="1" data-total="20" id="example4">\n' +
      '          <div class="bar">\n' +
      '            <div class="progress"/>\n' +
      '          </div>\n' +
      '          <div class="label">Adding Photos</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
