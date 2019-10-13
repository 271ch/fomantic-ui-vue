<template>
  <div>
    <div class="ui label">
      <i class="mail icon"/>
      23
      <a class="detail">View Mail</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelLink2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Content',
      title2: 'Link',
      description: 'A label can be a link or contain an item that links',
      model: '    <div class="ui label">\n' +
      '      <i class="mail icon"/>\n' +
      '      23\n' +
      '      <a class="detail">View Mail</a>\n' +
      '    </div>\n',
    };
  },
};
</script>
