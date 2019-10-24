<template>
  <div>
    <FuiMessage color=red>Red</FuiMessage>
    <FuiMessage color=orange>Orange</FuiMessage>
    <FuiMessage color=yellow>Yellow</FuiMessage>
    <FuiMessage color=olive>Olive</FuiMessage>
    <FuiMessage color=green>Green</FuiMessage>
    <FuiMessage color=teal>Teal</FuiMessage>
    <FuiMessage color=blue>Blue</FuiMessage>
    <FuiMessage color=violet>Violet</FuiMessage>
    <FuiMessage color=purple>Purple</FuiMessage>
    <FuiMessage color=pink>Pink</FuiMessage>
    <FuiMessage color=brown>Brown</FuiMessage>
    <FuiMessage color=black>Black</FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageColored1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'message',
    title1: 'Variations',
    title2: 'Colored',
    description: 'A message can be formatted to be different colors',
    model: '    <div class="ui red message">Red</div>\n' +
      '    <div class="ui orange message">Orange</div>\n' +
      '    <div class="ui yellow message">Yellow</div>\n' +
      '    <div class="ui olive message">Olive</div>\n' +
      '    <div class="ui green message">Green</div>\n' +
      '    <div class="ui teal message">Teal</div>\n' +
      '    <div class="ui blue message">Blue</div>\n' +
      '    <div class="ui violet message">Violet</div>\n' +
      '    <div class="ui purple message">Purple</div>\n' +
      '    <div class="ui pink message">Pink</div>\n' +
      '    <div class="ui brown message">Brown</div>\n' +
      '    <div class="ui black message">Black</div>\n',
  },
};
</script>
