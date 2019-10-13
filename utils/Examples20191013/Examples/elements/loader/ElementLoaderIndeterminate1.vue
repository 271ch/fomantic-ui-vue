<template>
  <div>
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui indeterminate text loader">Preparing Files</div>
      </div>
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderIndeterminate1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'loader',
      title1: 'States',
      title2: 'Indeterminate',
      description: 'A loader can show it\'s unsure of how long a task will take',
      model: '    <div class="ui segment">\n' +
      '      <div class="ui active dimmer">\n' +
      '        <div class="ui indeterminate text loader">Preparing Files</div>\n' +
      '      </div>\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
