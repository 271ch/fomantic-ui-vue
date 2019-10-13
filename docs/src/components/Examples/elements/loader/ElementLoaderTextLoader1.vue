<template>
  <div>
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui text loader">Loading</div>
      </div>
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderTextLoader1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'loader',
      title1: 'Types',
      title2: 'Text Loader',
      description: 'A loader can contain text',
      model: '    <div class="ui segment">\n' +
      '      <div class="ui active dimmer">\n' +
      '        <div class="ui text loader">Loading</div>\n' +
      '      </div>\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
