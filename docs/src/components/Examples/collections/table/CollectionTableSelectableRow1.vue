<template>
  <div>
    <table class="ui selectable celled table">
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
          <td>No Action</td>
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
        <tr class="warning">
          <td>John</td>
          <td>No Action</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td class="positive">Approved</td>
          <td class="warning">Requires call</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td class="negative">Denied</td>
          <td>None</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableSelectableRow1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'table',
      title1: 'Variations',
      title2: 'Selectable Row',
      description: 'A table can have its rows appear selectable',
      model: '    <table class="ui selectable celled table">\n' +
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
      '          <td>No Action</td>\n' +
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
      '        <tr class="warning">\n' +
      '          <td>John</td>\n' +
      '          <td>No Action</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td class="positive">Approved</td>\n' +
      '          <td class="warning">Requires call</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td class="negative">Denied</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
    };
  },
};
</script>
