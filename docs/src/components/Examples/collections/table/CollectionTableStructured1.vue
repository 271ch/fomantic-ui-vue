<template>
  <div>
    <div class="ui ignored info message">
      <p>UI tables use <code>border-collapse: separate</code> to allow for tables to receive styles that cannot usually be applied to tables like <code>border-radius</code>. However this can cause some cell borders to appear missing with complex layouts that use <code>rowspan</code> or <code>colspan</code> and rows with varying column count.</p>
      <p><code>ui structured table</code> does not support some style features, but can correctly display all valid HTML table content.</p>
    </div>
    <table class="ui celled structured table">
      <thead>
        <tr>
          <th rowspan="2">Name</th>
          <th rowspan="2">Type</th>
          <th rowspan="2">Files</th>
          <th colspan="3">Languages</th>
        </tr>
        <tr>
          <th>Ruby</th>
          <th>JavaScript</th>
          <th>Python</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alpha Team</td>
          <td>Project 1</td>
          <td class="right aligned">2</td>
          <td class="center aligned">
            <i class="large green checkmark icon"></i>
          </td>
          <td/>
          <td/>
        </tr>
        <tr>
          <td rowspan="3">Beta Team</td>
          <td>Project 1</td>
          <td class="right aligned">52</td>
          <td class="center aligned">
            <i class="large green checkmark icon"></i>
          </td>
          <td/>
          <td/>
        </tr>
        <tr>
          <td>Project 2</td>
          <td class="right aligned">12</td>
          <td/>
          <td class="center aligned">
            <i class="large green checkmark icon"></i>
          </td>
          <td/>
        </tr>
        <tr>
          <td>Project 3</td>
          <td class="right aligned">21</td>
          <td class="center aligned">
            <i class="large green checkmark icon"></i>
          </td>
          <td/>
          <td/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableStructured1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'table',
    title1: 'Types',
    title2: 'Structured',
    description: 'A table can be formatted to display complex structured data',
    model: '    <div class="ui ignored info message">\n' +
      '      <p>UI tables use <code>border-collapse: separate</code> to allow for tables to receive styles that cannot usually be applied to tables like <code>border-radius</code>. However this can cause some cell borders to appear missing with complex layouts that use <code>rowspan</code> or <code>colspan</code> and rows with varying column count.</p>\n' +
      '      <p><code>ui structured table</code> does not support some style features, but can correctly display all valid HTML table content.</p>\n' +
      '    </div>\n' +
      '    <table class="ui celled structured table">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '          <th rowspan="2">Name</th>\n' +
      '          <th rowspan="2">Type</th>\n' +
      '          <th rowspan="2">Files</th>\n' +
      '          <th colspan="3">Languages</th>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <th>Ruby</th>\n' +
      '          <th>JavaScript</th>\n' +
      '          <th>Python</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>Alpha Team</td>\n' +
      '          <td>Project 1</td>\n' +
      '          <td class="right aligned">2</td>\n' +
      '          <td class="center aligned">\n' +
      '            <i class="large green checkmark icon"></i>\n' +
      '          </td>\n' +
      '          <td/>\n' +
      '          <td/>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td rowspan="3">Beta Team</td>\n' +
      '          <td>Project 1</td>\n' +
      '          <td class="right aligned">52</td>\n' +
      '          <td class="center aligned">\n' +
      '            <i class="large green checkmark icon"></i>\n' +
      '          </td>\n' +
      '          <td/>\n' +
      '          <td/>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Project 2</td>\n' +
      '          <td class="right aligned">12</td>\n' +
      '          <td/>\n' +
      '          <td class="center aligned">\n' +
      '            <i class="large green checkmark icon"></i>\n' +
      '          </td>\n' +
      '          <td/>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Project 3</td>\n' +
      '          <td class="right aligned">21</td>\n' +
      '          <td class="center aligned">\n' +
      '            <i class="large green checkmark icon"></i>\n' +
      '          </td>\n' +
      '          <td/>\n' +
      '          <td/>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
