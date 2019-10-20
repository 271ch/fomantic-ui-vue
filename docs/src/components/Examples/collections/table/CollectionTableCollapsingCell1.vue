<template>
  <div>
    <div class="ui ignored warning icon message">
      <i class="warning icon"></i>
      <div class="content">
        To ensure icons don't wrap to a separate line you must either specify collapsing on the widest row in the collapsing column, or on all rows
      </div>
    </div>
    <table class="ui table">
      <tbody>
        <tr>
          <td class="collapsing">
            <i class="folder icon"></i> node_modules
          </td>
          <td>Initial commit</td>
          <td>10 hours ago</td>
        </tr>
        <tr>
          <td>
            <i class="folder icon"></i> test
          </td>
          <td>Initial commit</td>
          <td>10 hours ago</td>
        </tr>
        <tr>
          <td>
            <i class="folder icon"></i> build
          </td>
          <td>Initial commit</td>
          <td>10 hours ago</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableCollapsingCell1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'Variations',
    title2: 'Collapsing Cell',
    description: 'A cell can be collapsing so that it only uses as much space as required',
    model: '    <div class="ui ignored warning icon message">\n' +
      '      <i class="warning icon"></i>\n' +
      '      <div class="content">\n' +
      '        To ensure icons don\'t wrap to a separate line you must either specify collapsing on the widest row in the collapsing column, or on all rows\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <table class="ui table">\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td class="collapsing">\n' +
      '            <i class="folder icon"></i> node_modules\n' +
      '          </td>\n' +
      '          <td>Initial commit</td>\n' +
      '          <td>10 hours ago</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>\n' +
      '            <i class="folder icon"></i> test\n' +
      '          </td>\n' +
      '          <td>Initial commit</td>\n' +
      '          <td>10 hours ago</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>\n' +
      '            <i class="folder icon"></i> build\n' +
      '          </td>\n' +
      '          <td>Initial commit</td>\n' +
      '          <td>10 hours ago</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
