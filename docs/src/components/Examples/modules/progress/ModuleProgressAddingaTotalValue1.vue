<template>
  <div>
      <div class="code" data-type="javascript" data-demo="true">
        $('#example3')
          .progress('increment')
        ;
      </div>
      <div class="code" data-type="html" data-preview="true">
        <div class="ui teal progress" id="example3">
          <div class="bar">
            <div class="progress"/>
          </div>
          <div class="label">Adding Photos</div>
        </div>
      </div>
      <div class="evaluated code" data-type="javascript">
        $('#example3')
          .progress({
            total: 3
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressAddingaTotalValue1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Task Completion Percent',
    title2: 'Adding a Total Value',
    description: '???',
    model: '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'#example3\')\n' +
      '          .progress(\'increment\')\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-preview="true">\n' +
      '        <div class="ui teal progress" id="example3">\n' +
      '          <div class="bar">\n' +
      '            <div class="progress"/>\n' +
      '          </div>\n' +
      '          <div class="label">Adding Photos</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'#example3\')\n' +
      '          .progress({\n' +
      '            total: 3\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
