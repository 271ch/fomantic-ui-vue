<template>
  <div>
    <div class="ui celled ordered list">
      <div class="item">Cats</div>
      <div class="item">Horses</div>
      <div class="item">Dogs
        <div class="list">
          <div class="item">Labradoodles</div>
          <div class="item">Shiba Inu</div>
          <div class="item">Mastiff</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListCelled2',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'list',
    title1: 'Variations',
    title2: 'Celled',
    description: 'A list can divide its items into cells',
    model: '    <div class="ui celled ordered list">\n' +
      '      <div class="item">Cats</div>\n' +
      '      <div class="item">Horses</div>\n' +
      '      <div class="item">Dogs\n' +
      '        <div class="list">\n' +
      '          <div class="item">Labradoodles</div>\n' +
      '          <div class="item">Shiba Inu</div>\n' +
      '          <div class="item">Mastiff</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
