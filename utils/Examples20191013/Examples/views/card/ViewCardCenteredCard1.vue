<template>
  <div>
    <div class="ui centered card">
      <div class="image">
        <img src="/images/avatar2/large/elyse.png"/>
      </div>
      <div class="content">
        <a class="header">Elyse</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardCenteredCard1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'card',
      title1: 'Variations',
      title2: 'Centered Card',
      description: 'A card can center itself inside its container',
      model: '    <div class="ui centered card">\n' +
      '      <div class="image">\n' +
      '        <img src="/images/avatar2/large/elyse.png"/>\n' +
      '      </div>\n' +
      '      <div class="content">\n' +
      '        <a class="header">Elyse</a>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
