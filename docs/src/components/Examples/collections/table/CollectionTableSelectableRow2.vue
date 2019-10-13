<template>
  <div>
    <table class="ui selectable inverted table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th class="right aligned">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Approved</td>
          <td class="right aligned">None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td class="right aligned">Requires call</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Denied</td>
          <td class="right aligned">None</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableSelectableRow2',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'table',
      title1: 'Variations',
      title2: 'Selectable Row',
      description: 'A table can have its rows appear selectable',
      model: '    <table class="ui selectable inverted table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th>Name</th>\n' +
      '          <th>Status</th>\n' +
      '          <th class="right aligned">Notes</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>John</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td class="right aligned">None</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td class="right aligned">Requires call</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td>Denied</td>\n' +
      '          <td class="right aligned">None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
    };
  },
};
</script>
