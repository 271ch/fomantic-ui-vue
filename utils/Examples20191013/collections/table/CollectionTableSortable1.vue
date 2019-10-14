<template>
  <div>
    <div class="ui ignored warning message">Adding the class <code>ascending</code> or <code>descending</code> to the <code>th</code> will show the user the sorting direction. This example uses a modified version of the kylefox's <a href="https://github.com/kylefox/jquery-tablesort">tablesort plugin</a> to provide the proper class names. To make sortable tables work, include <a href="http://semantic-ui.com/javascript/library/tablesort.js">this javascript</a> into your page and call <code>$('table').tablesort()</code> when the DOM is ready.
    </div>
    <table class="ui sortable celled table">
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
          <td class="positive">Approved</td>
          <td class="warning">Requires call</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td class="negative">Denied</td>
          <td>None</td>
        </tr>
      </tbody>
      <tfoot>
        <th>3 People</th>
        <th>2 Approved</th>
        <th/>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableSortable1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'Variations',
    title2: 'Sortable',
    description: 'A table may allow a user to sort contents by clicking on a table header.',
    model: '    <div class="ui ignored warning message">Adding the class <code>ascending</code> or <code>descending</code> to the <code>th</code> will show the user the sorting direction. This example uses a modified version of the kylefox\'s <a href="https://github.com/kylefox/jquery-tablesort">tablesort plugin</a> to provide the proper class names. To make sortable tables work, include <a href="http://semantic-ui.com/javascript/library/tablesort.js">this javascript</a> into your page and call <code>$(\'table\').tablesort()</code> when the DOM is ready.\n' +
      '    </div>\n' +
      '    <table class="ui sortable celled table">\n' +
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
      '          <td class="positive">Approved</td>\n' +
      '          <td class="warning">Requires call</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td class="negative">Denied</td>\n' +
      '          <td>None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '      <tfoot>\n' +
      '        <th>3 People</th>\n' +
      '        <th>2 Approved</th>\n' +
      '        <th/>\n' +
      '      </tfoot>\n' +
      '    </table>\n',
  },
};
</script>
