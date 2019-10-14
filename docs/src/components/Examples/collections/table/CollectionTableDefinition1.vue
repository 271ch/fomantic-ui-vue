<template>
  <div>
    <div class="ui ignored info message">Definition tables are designed to display on a single background color. You can adjust this by changing <code>@definitionPageBackground</code>, or specifying a background color on the first cell</div>
    <table class="ui definition table">
      <thead>
        <th/>
        <th>Arguments</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr>
          <td>reset rating</td>
          <td>None</td>
          <td>Resets rating to default value</td>
        </tr>
        <tr>
          <td>set rating</td>
          <td>rating (integer)</td>
          <td>Sets the current star rating to specified value</td>
        </tr>
    </tbody></table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableDefinition1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'Types',
    title2: 'Definition',
    description: 'A table may be formatted to emphasize a first column that defines a rows content',
    model: '    <div class="ui ignored info message">Definition tables are designed to display on a single background color. You can adjust this by changing <code>@definitionPageBackground</code>, or specifying a background color on the first cell</div>\n' +
      '    <table class="ui definition table">\n' +
      '      <thead>\n' +
      '        <th/>\n' +
      '        <th>Arguments</th>\n' +
      '        <th>Description</th>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>reset rating</td>\n' +
      '          <td>None</td>\n' +
      '          <td>Resets rating to default value</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>set rating</td>\n' +
      '          <td>rating (integer)</td>\n' +
      '          <td>Sets the current star rating to specified value</td>\n' +
      '        </tr>\n' +
      '    </tbody></table>\n',
  },
};
</script>
