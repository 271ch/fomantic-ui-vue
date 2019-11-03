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
          <td>Jamie</td>
          <td>Approved</td>
          <td>Requires call</td>
        </tr>
        <tr class="active">
          <td>John</td>
          <td>Selected</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td>Requires call</td>
        </tr>
        <tr>
          <td class="active">Jill</td>
          <td>Approved</td>
          <td>None</td>
        </tr>
      </tbody>
    </FuiTable>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableActive1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'table',
    title1: 'States',
    title2: 'Active',
    description: 'A cell or row can be active or selected by a user',
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
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>Requires call</td>\n' +
      '        </tr>\n' +
      '        <tr class="active">\n' +
      '          <td>John</td>\n' +
      '          <td>Selected</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>Requires call</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td class="active">Jill</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
