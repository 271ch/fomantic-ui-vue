<template>
  <div>
    <h2 class="ui header">
      <img src="/images/avatar2/large/patrick.png" class="ui circular image"/>
      Patrick
    </h2>
    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderImage2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'header',
      title1: 'Content',
      title2: 'Image',
      description: 'A header may contain an',
      model: '    <h2 class="ui header">\n' +
      '      <img src="/images/avatar2/large/patrick.png" class="ui circular image"/>\n' +
      '      Patrick\n' +
      '    </h2>\n' +
      '    <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n',
    };
  },
};
</script>
