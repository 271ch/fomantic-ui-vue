<template>
  <div>
    <table class="ui celled table">
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
          <td>Unknown</td>
          <td>None</td>
        </tr>
        <tr class="warning">
          <td>Jimmy</td>
          <td><i class="attention icon"/> Requires Action</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Unknown</td>
          <td class="warning"><i class="attention icon"/> Hostile</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Unknown</td>
          <td>None</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableWarning1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'States',
    title2: 'Warning',
    description: 'A cell or row may warn a user',
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
      '          <td>Unknown</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '        <tr class="warning">\n' +
      '          <td>Jimmy</td>\n' +
      '          <td><i class="attention icon"/> Requires Action</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Unknown</td>\n' +
      '          <td class="warning"><i class="attention icon"/> Hostile</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td>Unknown</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
