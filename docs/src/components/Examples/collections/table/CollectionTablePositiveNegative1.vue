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
          <td class="negative">None</td>
        </tr>
        <tr class="positive">
          <td>Jimmy</td>
          <td><i class="icon checkmark"></i> Approved</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Unknown</td>
          <td class="positive"><i class="icon close"></i> Requires call</td>
        </tr>
        <tr class="negative">
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
  name: 'CollectionTablePositiveNegative1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'States',
    title2: 'Positive / Negative',
    description: 'A cell or row may let a user know whether a value is good or bad',
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
      '          <td class="negative">None</td>\n' +
      '        </tr>\n' +
      '        <tr class="positive">\n' +
      '          <td>Jimmy</td>\n' +
      '          <td><i class="icon checkmark"></i> Approved</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Unknown</td>\n' +
      '          <td class="positive"><i class="icon close"></i> Requires call</td>\n' +
      '        </tr>\n' +
      '        <tr class="negative">\n' +
      '          <td>Jill</td>\n' +
      '          <td>Unknown</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
