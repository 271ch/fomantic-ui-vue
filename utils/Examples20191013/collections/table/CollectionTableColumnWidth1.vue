<template>
  <div>
    <div class="ui ignored info message">Tables use a 16 column grid similar to <a href="/collections/grid.html">ui grid</a></div>
    <table class="ui table">
      <thead>
        <th class="ten wide">Name</th>
        <th class="six wide">Status</th>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Approved</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Denied</td>
        </tr>
      </tbody>
      <tfoot>
        <th>3 People</th>
        <th>2 Approved</th>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableColumnWidth1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'Variations',
    title2: 'Column Width',
    description: 'A table can specify the width of individual columns independently.',
    model: '    <div class="ui ignored info message">Tables use a 16 column grid similar to <a href="/collections/grid.html">ui grid</a></div>\n' +
      '    <table class="ui table">\n' +
      '      <thead>\n' +
      '        <th class="ten wide">Name</th>\n' +
      '        <th class="six wide">Status</th>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>John</td>\n' +
      '          <td>Approved</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td>Denied</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '      <tfoot>\n' +
      '        <th>3 People</th>\n' +
      '        <th>2 Approved</th>\n' +
      '      </tfoot>\n' +
      '    </table>\n',
  },
};
</script>
