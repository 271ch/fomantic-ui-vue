<template>
  <div>
    <table class="ui compact celled definition table">
      <thead>
        <tr>
          <th/>
          <th>Name</th>
          <th>Registration Date</th>
          <th>E-mail address</th>
          <th>Premium Plan</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="collapsing">
            <div class="ui fitted slider checkbox">
              <input type="checkbox"/> <label/>
            </div>
          </td>
          <td>John Lilki</td>
          <td>September 14, 2013</td>
          <td>jhlilk22@yahoo.com</td>
          <td>No</td>
        </tr>
        <tr>
          <td class="collapsing">
            <div class="ui fitted slider checkbox">
              <input type="checkbox"/> <label/>
            </div>
          </td>
          <td>Jamie Harington</td>
          <td>January 11, 2014</td>
          <td>jamieharingonton@yahoo.com</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td class="collapsing">
            <div class="ui fitted slider checkbox">
              <input type="checkbox"/> <label/>
            </div>
          </td>
          <td>Jill Lewis</td>
          <td>May 11, 2014</td>
          <td>jilsewris22@yahoo.com</td>
          <td>Yes</td>
        </tr>
      </tbody>
      <tfoot class="full-width">
        <tr>
          <th/>
          <th colspan="4">
            <div class="ui right floated small primary labeled icon button">
              <i class="user icon"/> Add User
            </div>
            <div class="ui small button">
              Approve
            </div>
            <div class="ui small  disabled button">
              Approve All
            </div>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableDefinition2',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'table',
      title1: 'Types',
      title2: 'Definition',
      description: 'A table may be formatted to emphasize a first column that defines a rows content',
      model: '    <table class="ui compact celled definition table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th/>\n' +
      '          <th>Name</th>\n' +
      '          <th>Registration Date</th>\n' +
      '          <th>E-mail address</th>\n' +
      '          <th>Premium Plan</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td class="collapsing">\n' +
      '            <div class="ui fitted slider checkbox">\n' +
      '              <input type="checkbox"/> <label/>\n' +
      '            </div>\n' +
      '          </td>\n' +
      '          <td>John Lilki</td>\n' +
      '          <td>September 14, 2013</td>\n' +
      '          <td>jhlilk22@yahoo.com</td>\n' +
      '          <td>No</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td class="collapsing">\n' +
      '            <div class="ui fitted slider checkbox">\n' +
      '              <input type="checkbox"/> <label/>\n' +
      '            </div>\n' +
      '          </td>\n' +
      '          <td>Jamie Harington</td>\n' +
      '          <td>January 11, 2014</td>\n' +
      '          <td>jamieharingonton@yahoo.com</td>\n' +
      '          <td>Yes</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td class="collapsing">\n' +
      '            <div class="ui fitted slider checkbox">\n' +
      '              <input type="checkbox"/> <label/>\n' +
      '            </div>\n' +
      '          </td>\n' +
      '          <td>Jill Lewis</td>\n' +
      '          <td>May 11, 2014</td>\n' +
      '          <td>jilsewris22@yahoo.com</td>\n' +
      '          <td>Yes</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '      <tfoot class="full-width">\n' +
      '        <tr>\n' +
      '          <th/>\n' +
      '          <th colspan="4">\n' +
      '            <div class="ui right floated small primary labeled icon button">\n' +
      '              <i class="user icon"/> Add User\n' +
      '            </div>\n' +
      '            <div class="ui small button">\n' +
      '              Approve\n' +
      '            </div>\n' +
      '            <div class="ui small  disabled button">\n' +
      '              Approve All\n' +
      '            </div>\n' +
      '          </th>\n' +
      '        </tr>\n' +
      '      </tfoot>\n' +
      '    </table>\n',
    };
  },
};
</script>
