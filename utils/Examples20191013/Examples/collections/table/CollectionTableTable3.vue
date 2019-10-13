<template>
  <div>
    <table class="ui very basic collapsing celled table">
      <thead>
        <th>Employee</th>
        <th>Correct Guesses</th>
      </thead>
      <tbody>
        <tr>
          <td>
            <h4 class="ui image header">
              <img src="/images/avatar2/small/lena.png" class="ui mini rounded image"/>
              <div class="content">
                Lena
                <div class="sub header">Human Resources
              </div>
            </div>
          </h4></td>
          <td>
            22
          </td>
        </tr>
        <tr>
          <td>
            <h4 class="ui image header">
              <img src="/images/avatar2/small/matthew.png" class="ui mini rounded image"/>
              <div class="content">
                Matthew
                <div class="sub header">Fabric Design
              </div>
            </div>
          </h4></td>
          <td>
            15
          </td>
        </tr>
        <tr>
          <td>
            <h4 class="ui image header">
              <img src="/images/avatar2/small/lindsay.png" class="ui mini rounded image"/>
              <div class="content">
                Lindsay
                <div class="sub header">Entertainment
              </div>
            </div>
          </h4></td>
          <td>
            12
          </td>
        </tr>
        <tr>
          <td>
            <h4 class="ui image header">
              <img src="/images/avatar2/small/mark.png" class="ui mini rounded image"/>
              <div class="content">
                Mark
                <div class="sub header">Executive
              </div>
            </div>
          </h4></td>
          <td>
            11
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableTable3',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'table',
      title1: 'Types',
      title2: 'Table',
      description: 'A standard table',
      model: '    <table class="ui very basic collapsing celled table">\n' +
      '      <thead>\n' +
      '        <th>Employee</th>\n' +
      '        <th>Correct Guesses</th>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>\n' +
      '            <h4 class="ui image header">\n' +
      '              <img src="/images/avatar2/small/lena.png" class="ui mini rounded image"/>\n' +
      '              <div class="content">\n' +
      '                Lena\n' +
      '                <div class="sub header">Human Resources\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </h4></td>\n' +
      '          <td>\n' +
      '            22\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>\n' +
      '            <h4 class="ui image header">\n' +
      '              <img src="/images/avatar2/small/matthew.png" class="ui mini rounded image"/>\n' +
      '              <div class="content">\n' +
      '                Matthew\n' +
      '                <div class="sub header">Fabric Design\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </h4></td>\n' +
      '          <td>\n' +
      '            15\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>\n' +
      '            <h4 class="ui image header">\n' +
      '              <img src="/images/avatar2/small/lindsay.png" class="ui mini rounded image"/>\n' +
      '              <div class="content">\n' +
      '                Lindsay\n' +
      '                <div class="sub header">Entertainment\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </h4></td>\n' +
      '          <td>\n' +
      '            12\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>\n' +
      '            <h4 class="ui image header">\n' +
      '              <img src="/images/avatar2/small/mark.png" class="ui mini rounded image"/>\n' +
      '              <div class="content">\n' +
      '                Mark\n' +
      '                <div class="sub header">Executive\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </h4></td>\n' +
      '          <td>\n' +
      '            11\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
    };
  },
};
</script>
