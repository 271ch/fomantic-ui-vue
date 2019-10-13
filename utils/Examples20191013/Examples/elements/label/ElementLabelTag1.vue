<template>
  <div>
    <a class="ui tag label">New</a>
    <a class="ui red tag label">Upcoming</a>
    <a class="ui teal tag label">Featured</a>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelTag1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Types',
      title2: 'Tag',
      description: 'A label can appear as a tag',
      model: '    <a class="ui tag label">New</a>\n' +
      '    <a class="ui red tag label">Upcoming</a>\n' +
      '    <a class="ui teal tag label">Featured</a>\n',
    };
  },
};
</script>
