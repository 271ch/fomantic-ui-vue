<template>
  <div>
    <h2 class="ui header">
      <i class="plug icon"/>
      <div class="content">
        Uptime Guarantee
      </div>
    </h2>
    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderIcon1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'header',
      title1: 'Content',
      title2: 'Icon',
      description: 'A header may contain an',
      model: '    <h2 class="ui header">\n' +
      '      <i class="plug icon"/>\n' +
      '      <div class="content">\n' +
      '        Uptime Guarantee\n' +
      '      </div>\n' +
      '    </h2>\n' +
      '    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n',
    };
  },
};
</script>
