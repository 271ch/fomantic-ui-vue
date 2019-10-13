<template>
  <div>
    <table class="ui celled padded table">
      <thead>
        <th class="single line">Evidence Rating</th>
        <th>Effect</th>
        <th>Efficacy</th>
        <th>Consensus</th>
        <th>Comments</th>
      </thead>
      <tbody>
        <tr>
          <td>
            <h2 class="ui center aligned header">A</h2>
          </td>
          <td class="single line">
            Power Output
          </td>
          <td>
            <div class="ui yellow rating" data-rating="3" data-max-rating="3"/>
          </td>
          <td class="right aligned">
            80% <br/>
            <a href="#">18 studies</a>
          </td>
          <td>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.</td>
        </tr>
        <tr>
          <td>
            <h2 class="ui center aligned header">A</h2>
          </td>
          <td class="single line">
            Weight
          </td>
          <td>
            <div class="ui yellow rating" data-rating="3" data-max-rating="3"/>
          </td>
          <td class="right aligned">
            100% <br/>
            <a href="#">65 studies</a>
          </td>
          <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
        </tr>
      </tbody>
      <tfoot>
        <th colspan="5">
          <div class="ui right floated pagination menu">
            <a class="icon item">
              <i class="left chevron icon"/>
            </a>
            <a class="item">1</a>
            <a class="item">2</a>
            <a class="item">3</a>
            <a class="item">4</a>
            <a class="icon item">
              <i class="right chevron icon"/>
            </a>
          </div>
        </th>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableTable2',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'table',
      title1: 'Types',
      title2: 'Table',
      description: 'A standard table',
      model: '    <table class="ui celled padded table">\n' +
      '      <thead>\n' +
      '        <th class="single line">Evidence Rating</th>\n' +
      '        <th>Effect</th>\n' +
      '        <th>Efficacy</th>\n' +
      '        <th>Consensus</th>\n' +
      '        <th>Comments</th>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>\n' +
      '            <h2 class="ui center aligned header">A</h2>\n' +
      '          </td>\n' +
      '          <td class="single line">\n' +
      '            Power Output\n' +
      '          </td>\n' +
      '          <td>\n' +
      '            <div class="ui yellow rating" data-rating="3" data-max-rating="3"/>\n' +
      '          </td>\n' +
      '          <td class="right aligned">\n' +
      '            80% <br/>\n' +
      '            <a href="#">18 studies</a>\n' +
      '          </td>\n' +
      '          <td>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>\n' +
      '            <h2 class="ui center aligned header">A</h2>\n' +
      '          </td>\n' +
      '          <td class="single line">\n' +
      '            Weight\n' +
      '          </td>\n' +
      '          <td>\n' +
      '            <div class="ui yellow rating" data-rating="3" data-max-rating="3"/>\n' +
      '          </td>\n' +
      '          <td class="right aligned">\n' +
      '            100% <br/>\n' +
      '            <a href="#">65 studies</a>\n' +
      '          </td>\n' +
      '          <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '      <tfoot>\n' +
      '        <th colspan="5">\n' +
      '          <div class="ui right floated pagination menu">\n' +
      '            <a class="icon item">\n' +
      '              <i class="left chevron icon"/>\n' +
      '            </a>\n' +
      '            <a class="item">1</a>\n' +
      '            <a class="item">2</a>\n' +
      '            <a class="item">3</a>\n' +
      '            <a class="item">4</a>\n' +
      '            <a class="icon item">\n' +
      '              <i class="right chevron icon"/>\n' +
      '            </a>\n' +
      '          </div>\n' +
      '        </th>\n' +
      '      </tfoot>\n' +
      '    </table>\n',
    };
  },
};
</script>
