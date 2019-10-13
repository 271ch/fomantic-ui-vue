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
        <tr class="disabled">
          <td>Jamie</td>
          <td>Approved</td>
          <td>Requires call</td>
        </tr>
        <tr>
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
          <td class="disabled">Jill</td>
          <td>Approved</td>
          <td>None</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableDisabled1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'table',
      title1: 'States',
      title2: 'Disabled',
      description: 'A cell can be disabled',
      model: '    <table class="ui celled table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th>Name</th>\n' +
      '          <th>Status</th>\n' +
      '          <th>Notes</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr class="disabled">\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>Requires call</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
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
      '          <td class="disabled">Jill</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
    };
  },
};
</script>
