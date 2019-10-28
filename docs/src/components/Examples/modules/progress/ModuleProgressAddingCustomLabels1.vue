<template>
  <div>
      <table class="ui basic celled definition table">
        <tr>
          <td>{percent}</td>
          <td>Current percentage</td>
        </tr>
        <tr>
          <td>{value}</td>
          <td>Current value</td>
        </tr>
        <tr>
          <td>{total}</td>
          <td>Total value</td>
        </tr>
        <tr>
          <td>{left}</td>
          <td>Distance to total, or % progress left</td>
        </tr>
      </table>
      <div class="code" data-type="javascript" data-demo="true">
        $('#example5')
          .progress('increment')
        ;
      </div>
      <div class="code" data-type="html" data-preview="true">
        <div class="ui indicating progress" data-value="1" data-total="20" id="example5">
          <div class="bar"/>
          <div class="label">Adding Photos</div>
        </div>
      </div>
      <div class="evaluated code" data-type="javascript">
        $('#example5')
          .progress({
            text: {
              active  : 'Adding {value} of {total} photos',
              success : '{total} Photos Uploaded!'
            }
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressAddingCustomLabels1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Task Completion Percent',
    title2: 'Adding Custom Labels',
    description: '???',
    model: '      <table class="ui basic celled definition table">\n' +
      '        <tr>\n' +
      '          <td>{percent}</td>\n' +
      '          <td>Current percentage</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>{value}</td>\n' +
      '          <td>Current value</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>{total}</td>\n' +
      '          <td>Total value</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>{left}</td>\n' +
      '          <td>Distance to total, or % progress left</td>\n' +
      '        </tr>\n' +
      '      </table>\n' +
      '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'#example5\')\n' +
      '          .progress(\'increment\')\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-preview="true">\n' +
      '        <div class="ui indicating progress" data-value="1" data-total="20" id="example5">\n' +
      '          <div class="bar"/>\n' +
      '          <div class="label">Adding Photos</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'#example5\')\n' +
      '          .progress({\n' +
      '            text: {\n' +
      '              active  : \'Adding {value} of {total} photos\',\n' +
      '              success : \'{total} Photos Uploaded!\'\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
