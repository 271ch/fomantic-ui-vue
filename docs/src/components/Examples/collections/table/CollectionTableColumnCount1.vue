<template>
  <div>
    <FuiTable column=five>
      <thead>
        <th>Name</th>
        <th>Status</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Notes</th>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Approved</td>
          <td>22</td>
          <td>Male</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td>32</td>
          <td>Male</td>
          <td>Requires call</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Denied</td>
          <td>22</td>
          <td>Female</td>
          <td>None</td>
        </tr>
      </tbody>
      <tfoot>
        <th>3 People</th>
        <th>2 Approved</th>
        <th></th>
        <th></th>
        <th></th>
      </tfoot>
    </FuiTable>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableColumnCount1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'table',
    title1: 'Variations',
    title2: 'Column Count',
    description: 'A table can specify its column count to divide its content evenly',
    model: '    <table class="ui five column table">\n' +
      '      <thead>\n' +
      '        <th>Name</th>\n' +
      '        <th>Status</th>\n' +
      '        <th>Age</th>\n' +
      '        <th>Gender</th>\n' +
      '        <th>Notes</th>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>John</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>22</td>\n' +
      '          <td>Male</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>32</td>\n' +
      '          <td>Male</td>\n' +
      '          <td>Requires call</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td>Denied</td>\n' +
      '          <td>22</td>\n' +
      '          <td>Female</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '      <tfoot>\n' +
      '        <th>3 People</th>\n' +
      '        <th>2 Approved</th>\n' +
      '        <th></th>\n' +
      '        <th></th>\n' +
      '        <th></th>\n' +
      '      </tfoot>\n' +
      '    </table>\n',
  },
};
</script>
