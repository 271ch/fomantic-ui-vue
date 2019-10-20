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
        <td class="orange">No Name Specified</td>
        <td>Unknown</td>
        <td>None</td>
      </tr>
      <tr class="blue">
        <td>Jimmy</td>
        <td><i class="microphone icon"></i> Recording session</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Jamie</td>
        <td>Unknown</td>
        <td class="pink"><i class="child icon"></i> Baby Party</td>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Unknown</td>
        <td class="green">Vacation</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableColoredCells1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'States',
    title2: 'Colored Cells',
    description: 'A cell can be styled by the central color palette colors',
    model: '    <table class="ui celled table">\n' +
      '      <thead>\n' +
      '      <tr>\n' +
      '        <th>Name</th>\n' +
      '        <th>Status</th>\n' +
      '        <th>Notes</th>\n' +
      '      </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '      <tr>\n' +
      '        <td class="orange">No Name Specified</td>\n' +
      '        <td>Unknown</td>\n' +
      '        <td>None</td>\n' +
      '      </tr>\n' +
      '      <tr class="blue">\n' +
      '        <td>Jimmy</td>\n' +
      '        <td><i class="microphone icon"></i> Recording session</td>\n' +
      '        <td>None</td>\n' +
      '      </tr>\n' +
      '      <tr>\n' +
      '        <td>Jamie</td>\n' +
      '        <td>Unknown</td>\n' +
      '        <td class="pink"><i class="child icon"></i> Baby Party</td>\n' +
      '      </tr>\n' +
      '      <tr>\n' +
      '        <td>Jill</td>\n' +
      '        <td>Unknown</td>\n' +
      '        <td class="green">Vacation</td>\n' +
      '      </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
