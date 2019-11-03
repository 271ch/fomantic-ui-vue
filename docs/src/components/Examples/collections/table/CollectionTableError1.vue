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
          <td>No Name Specified</td>
          <td>Approved</td>
          <td>None</td>
        </tr>
        <tr class="error">
          <td>Jimmy</td>
          <td>Cannot pull data</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td class="error"><FuiIcon name=attention></FuiIcon> Classified</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Approved</td>
          <td>None</td>
        </tr>
      </tbody>
    </FuiTable>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableError1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'States',
    title2: 'Error',
    description: 'A cell or row may call attention to an error or a negative value',
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
      '          <td>No Name Specified</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '        <tr class="error">\n' +
      '          <td>Jimmy</td>\n' +
      '          <td>Cannot pull data</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td class="error"><i class="attention icon"></i> Classified</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
