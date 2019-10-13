<template>
  <div>
    <table class="ui single line table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Registration Date</th>
          <th>E-mail address</th>
          <th>Premium Plan</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Lilki</td>
          <td>September 14, 2013</td>
          <td>jhlilk22@yahoo.com</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Jamie Harington</td>
          <td>January 11, 2014</td>
          <td>jamieharingonton@yahoo.com</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Jill Lewis</td>
          <td>May 11, 2014</td>
          <td>jilsewris22@yahoo.com</td>
          <td>Yes</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableSingleLine1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'table',
      title1: 'Variations',
      title2: 'Single Line',
      description: 'A table can specify that its cell contents should remain on a single line, and not wrap.',
      model: '    <table class="ui single line table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th>Name</th>\n' +
      '          <th>Registration Date</th>\n' +
      '          <th>E-mail address</th>\n' +
      '          <th>Premium Plan</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>John Lilki</td>\n' +
      '          <td>September 14, 2013</td>\n' +
      '          <td>jhlilk22@yahoo.com</td>\n' +
      '          <td>No</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie Harington</td>\n' +
      '          <td>January 11, 2014</td>\n' +
      '          <td>jamieharingonton@yahoo.com</td>\n' +
      '          <td>Yes</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill Lewis</td>\n' +
      '          <td>May 11, 2014</td>\n' +
      '          <td>jilsewris22@yahoo.com</td>\n' +
      '          <td>Yes</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
    };
  },
};
</script>
