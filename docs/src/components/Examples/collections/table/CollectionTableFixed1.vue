<template>
  <div>
    <table class="ui fixed table">
      <thead>
        <th>Name</th>
        <th>Status</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Approved</td>
          <td>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Denied</td>
          <td>Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableFixed1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'Variations',
    title2: 'Fixed',
    description: 'A table can use',
    model: '    <table class="ui fixed table">\n' +
      '      <thead>\n' +
      '        <th>Name</th>\n' +
      '        <th>Status</th>\n' +
      '        <th>Description</th>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>John</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>John is an interesting boy but sometimes you don\'t really have enough room to describe everything you\'d like</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td>Jamie is a kind girl but sometimes you don\'t really have enough room to describe everything you\'d like</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td>Denied</td>\n' +
      '          <td>Jill is an alright girl but sometimes you don\'t really have enough room to describe everything you\'d like</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
