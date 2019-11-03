<template>
  <div>
    <FuiTable celled>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Approved</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td>Requires call</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Denied</td>
          <td>None</td>
        </tr>
      </tbody>
      <tfoot>
        <th>3 People</th>
        <th>2 Approved</th>
        <th></th>
      </tfoot>
    </FuiTable>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableCelled1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'table',
    title1: 'Variations',
    title2: 'Celled',
    description: 'A table may be divided each row into separate cells',
    model: '    <table class="ui celled table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th>Name</th>\n' +
      '          <th>Status</th>\n' +
      '          <th>Notes</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>John</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>Requires call</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td>Denied</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '      <tfoot>\n' +
      '        <th>3 People</th>\n' +
      '        <th>2 Approved</th>\n' +
      '        <th></th>\n' +
      '      </tfoot>\n' +
      '    </table>\n',
  },
};
</script>
