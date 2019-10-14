<template>
  <div>
    <div class="ui ignored info message">Using an <code>a</code> link inside a selectable cell will automatically make the hit box the entire cell area. By default links will inherit their cell color.</div>
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>No Action</td>
          <td class="selectable">
            <a href="#">Edit</a>
          </td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td class="selectable">
            <a href="#">Edit</a>
          </td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Denied</td>
          <td class="selectable">
            <a href="#">Edit</a>
          </td>
        </tr>
        <tr class="warning">
          <td>John</td>
          <td>No Action</td>
          <td class="selectable warning">
            <a href="#">Requires change</a>
          </td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td class="positive">Approved</td>
          <td class="selectable positive">
            <a href="#">Approve</a>
          </td>
        </tr>
        <tr>
          <td>Jill</td>
          <td class="negative">Denied</td>
          <td class="selectable negative">
            <a href="#">Remove</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableSelectableCell1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'Variations',
    title2: 'Selectable Cell',
    description: 'A table cell can be selectable',
    model: '    <div class="ui ignored info message">Using an <code>a</code> link inside a selectable cell will automatically make the hit box the entire cell area. By default links will inherit their cell color.</div>\n' +
      '    <table class="ui celled table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th>Name</th>\n' +
      '          <th>Status</th>\n' +
      '          <th>Edit</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>John</td>\n' +
      '          <td>No Action</td>\n' +
      '          <td class="selectable">\n' +
      '            <a href="#">Edit</a>\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td class="selectable">\n' +
      '            <a href="#">Edit</a>\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td>Denied</td>\n' +
      '          <td class="selectable">\n' +
      '            <a href="#">Edit</a>\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr class="warning">\n' +
      '          <td>John</td>\n' +
      '          <td>No Action</td>\n' +
      '          <td class="selectable warning">\n' +
      '            <a href="#">Requires change</a>\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td class="positive">Approved</td>\n' +
      '          <td class="selectable positive">\n' +
      '            <a href="#">Approve</a>\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td class="negative">Denied</td>\n' +
      '          <td class="selectable negative">\n' +
      '            <a href="#">Remove</a>\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
