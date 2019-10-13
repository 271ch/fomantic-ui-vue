<template>
  <div>
    <table class="ui inverted red table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
    <table class="ui inverted orange table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
    <table class="ui inverted yellow table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
    <table class="ui inverted olive table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
    <table class="ui inverted green table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
    <table class="ui inverted teal table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
    <table class="ui inverted blue table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
    <table class="ui inverted violet table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
    <table class="ui inverted purple table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
    <table class="ui inverted pink table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
    <table class="ui inverted brown table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
    <table class="ui inverted grey table">
      <thead>
        <th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CollectionTableInverted2',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'table',
      title1: 'Variations',
      title2: 'Inverted',
      description: 'A table\'s colors can be inverted',
      model: '    <table class="ui inverted red table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui inverted orange table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui inverted yellow table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui inverted olive table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui inverted green table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui inverted teal table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui inverted blue table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui inverted violet table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui inverted purple table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui inverted pink table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui inverted brown table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    <table class="ui inverted grey table">\n' +
      '      <thead>\n' +
      '        <th>Food</th>\n' +
      '        <th>Calories</th>\n' +
      '        <th>Protein</th>\n' +
      '      </thead><tbody>\n' +
      '        <tr>\n' +
      '          <td>Apples</td>\n' +
      '          <td>200</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>Orange</td>\n' +
      '          <td>310</td>\n' +
      '          <td>0g</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
    };
  },
};
</script>
