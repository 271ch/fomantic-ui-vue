<template>
  <div>
    <table class="ui striped table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date Joined</th>
          <th>E-mail</th>
          <th>Called</th>
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
        <tr>
          <td>John Lilki</td>
          <td>September 14, 2013</td>
          <td>jhlilk22@yahoo.com</td>
          <td>No</td>
        </tr>
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
        <tr>
          <td>John Lilki</td>
          <td>September 14, 2013</td>
          <td>jhlilk22@yahoo.com</td>
          <td>No</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableStriped1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'table',
      title1: 'Variations',
      title2: 'Striped',
      description: 'A table can stripe alternate rows of content with a darker color to increase contrast',
      model: '    <table class="ui striped table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th>Name</th>\n' +
      '          <th>Date Joined</th>\n' +
      '          <th>E-mail</th>\n' +
      '          <th>Called</th>\n' +
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
      '        <tr>\n' +
      '          <td>John Lilki</td>\n' +
      '          <td>September 14, 2013</td>\n' +
      '          <td>jhlilk22@yahoo.com</td>\n' +
      '          <td>No</td>\n' +
      '        </tr>\n' +
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
      '        <tr>\n' +
      '          <td>John Lilki</td>\n' +
      '          <td>September 14, 2013</td>\n' +
      '          <td>jhlilk22@yahoo.com</td>\n' +
      '          <td>No</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
    };
  },
};
</script>
