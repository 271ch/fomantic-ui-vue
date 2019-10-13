<template>
  <div>
    <table class="ui padded table">
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
          <td>Approved</td>
          <td>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td>Jamie was not interested in purchasing our product.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTablePadded1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'table',
      title1: 'Variations',
      title2: 'Padded',
      description: 'A table may sometimes need to be more padded for legibility',
      model: '    <table class="ui padded table">\n' +
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
      '          <td>Approved</td>\n' +
      '          <td>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>Jamie was not interested in purchasing our product.</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
    };
  },
};
</script>
