<template>
  <div>
    <h4 class="ui horizontal divider header">
      <i class="bar chart icon"/>
      Specifications
    </h4>
    <table class="ui definition table">
      <tbody>
        <tr>
          <td class="two wide column">Size</td>
          <td>1" x 2"</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>6 ounces</td>
        </tr>
        <tr>
          <td>Color</td>
          <td>Yellowish</td>
        </tr>
        <tr>
          <td>Odor</td>
          <td>Not Much Usually</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerHorizontalDivider2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'divider',
      title1: 'Types',
      title2: 'Horizontal Divider',
      description: 'A divider can segment content horizontally',
      model: '    <h4 class="ui horizontal divider header">\n' +
      '      <i class="bar chart icon"/>\n' +
      '      Specifications\n' +
      '    </h4>\n' +
      '    <table class="ui definition table">\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td class="two wide column">Size</td>\n' +
      '          <td>1" x 2"</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Weight</td>\n' +
      '          <td>6 ounces</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Color</td>\n' +
      '          <td>Yellowish</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Odor</td>\n' +
      '          <td>Not Much Usually</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
    };
  },
};
</script>
