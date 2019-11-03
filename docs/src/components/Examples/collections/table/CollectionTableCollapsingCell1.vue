<template>
  <div>
    <FuiTable>
      <tbody>
        <tr>
          <td class="collapsing">
            <FuiIcon name=folder></FuiIcon> node_modules
          </td>
          <td>Initial commit</td>
          <td>10 hours ago</td>
        </tr>
        <tr>
          <td>
            <FuiIcon name=folder></FuiIcon> test
          </td>
          <td>Initial commit</td>
          <td>10 hours ago</td>
        </tr>
        <tr>
          <td>
            <FuiIcon name=folder></FuiIcon> build
          </td>
          <td>Initial commit</td>
          <td>10 hours ago</td>
        </tr>
      </tbody>
    </FuiTable>
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
