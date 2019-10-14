<template>
  <div>
    <div class="ui ignored positive message">
      Tables will automatically stack their layouts for mobile devices. To disable this behavior, use the <code>unstackable</code> variation or <code>tablet stackable</code> to allow responsive adjustments for tablet.
    </div>
    <table class="ui celled table">
      <thead>
        <th>Name</th>
        <th>Age</th>
        <th>Job</th>
      </thead>
      <tbody>
        <tr>
          <td data-label="Name">James</td>
          <td data-label="Age">24</td>
          <td data-label="Job">Engineer</td>
        </tr>
        <tr>
          <td data-label="Name">Jill</td>
          <td data-label="Age">26</td>
          <td data-label="Job">Engineer</td>
        </tr>
        <tr>
          <td data-label="Name">Elyse</td>
          <td data-label="Age">24</td>
          <td data-label="Job">Designer</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableTable1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'Types',
    title2: 'Table',
    description: 'A standard table',
    model: '    <div class="ui ignored positive message">\n' +
      '      Tables will automatically stack their layouts for mobile devices. To disable this behavior, use the <code>unstackable</code> variation or <code>tablet stackable</code> to allow responsive adjustments for tablet.\n' +
      '    </div>\n' +
      '    <table class="ui celled table">\n' +
      '      <thead>\n' +
      '        <th>Name</th>\n' +
      '        <th>Age</th>\n' +
      '        <th>Job</th>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td data-label="Name">James</td>\n' +
      '          <td data-label="Age">24</td>\n' +
      '          <td data-label="Job">Engineer</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td data-label="Name">Jill</td>\n' +
      '          <td data-label="Age">26</td>\n' +
      '          <td data-label="Job">Engineer</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td data-label="Name">Elyse</td>\n' +
      '          <td data-label="Age">24</td>\n' +
      '          <td data-label="Job">Designer</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
