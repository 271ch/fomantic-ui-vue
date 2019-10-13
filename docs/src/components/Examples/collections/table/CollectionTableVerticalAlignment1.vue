<template>
  <div>
    <table class="ui striped table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr class="top aligned">
          <td>John</td>
          <td>Approved</td>
          <td class="top aligned">
            Notes<br/>
            1<br/>
            2<br/>
          </td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td class="bottom aligned">Approved</td>
          <td>
            Notes<br/>
            1<br/>
            2<br/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableVerticalAlignment1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'table',
      title1: 'Variations',
      title2: 'Vertical Alignment',
      description: 'A table header, row, or cell can adjust its vertical alignment',
      model: '    <table class="ui striped table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th>Name</th>\n' +
      '          <th>Status</th>\n' +
      '          <th>Notes</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr class="top aligned">\n' +
      '          <td>John</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td class="top aligned">\n' +
      '            Notes<br/>\n' +
      '            1<br/>\n' +
      '            2<br/>\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td class="bottom aligned">Approved</td>\n' +
      '          <td>\n' +
      '            Notes<br/>\n' +
      '            1<br/>\n' +
      '            2<br/>\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
    };
  },
};
</script>
