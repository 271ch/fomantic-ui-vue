<template>
  <div>
      <div class="code" data-type="javascript" data-demo="true">
        $('#example6')
          .progress('increment')
        ;
      </div>
      <div class="code" data-type="html" data-preview="true">
        <div class="ui progress" data-value="15" data-total="20" id="example6">
          <div class="bar">
            <div class="progress"/>
          </div>
          <div class="label">Carga de archivos</div>
        </div>
      </div>
      <div class="evaluated code" data-type="javascript">
        $('#example6')
          .progress({
            label: 'ratio',
            text: {
              ratio: '{value} de {total}'
            }
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressTranslation1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Task Completion Percent',
    title2: 'Translation',
    description: 'You can also adjust text labels to help strings appear translated',
    model: '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'#example6\')\n' +
      '          .progress(\'increment\')\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-preview="true">\n' +
      '        <div class="ui progress" data-value="15" data-total="20" id="example6">\n' +
      '          <div class="bar">\n' +
      '            <div class="progress"/>\n' +
      '          </div>\n' +
      '          <div class="label">Carga de archivos</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'#example6\')\n' +
      '          .progress({\n' +
      '            label: \'ratio\',\n' +
      '            text: {\n' +
      '              ratio: \'{value} de {total}\'\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
