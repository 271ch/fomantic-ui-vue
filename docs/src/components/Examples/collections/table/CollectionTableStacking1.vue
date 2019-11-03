<template>
  <div>
    <FuiTable unstackable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th class="right aligned">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Approved</td>
          <td class="right aligned">None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td class="right aligned">Requires call</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Denied</td>
          <td class="right aligned">None</td>
        </tr>
      </tbody>
    </FuiTable>
    <FuiTable tablet stackable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th class="right aligned">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Approved</td>
          <td class="right aligned">None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td class="right aligned">Requires call</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Denied</td>
          <td class="right aligned">None</td>
        </tr>
      </tbody>
    </FuiTable>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableStacking1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'Variations',
    title2: 'Stacking',
    description: 'A table can specify how it stacks table content responsively',
    model: '    <table class="ui unstackable table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th>Name</th>\n' +
      '          <th>Status</th>\n' +
      '          <th class="right aligned">Notes</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>John</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td class="right aligned">None</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td class="right aligned">Requires call</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td>Denied</td>\n' +
      '          <td class="right aligned">None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui tablet stackable table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th>Name</th>\n' +
      '          <th>Status</th>\n' +
      '          <th class="right aligned">Notes</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>John</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td class="right aligned">None</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jamie</td>\n' +
      '          <td>Approved</td>\n' +
      '          <td class="right aligned">Requires call</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Jill</td>\n' +
      '          <td>Denied</td>\n' +
      '          <td class="right aligned">None</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
