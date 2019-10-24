<template>
  <div>
    <FuiLabel tag=a tagged>New</FuiLabel>
    <FuiLabel tag=a tagged color=red>Upcoming</FuiLabel>
    <FuiLabel tag=a tagged color=teal>Featured</FuiLabel>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelTag1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Tag',
    description: 'A label can appear as a tag',
    model: '    <a class="ui tag label">New</a>\n' +
      '    <a class="ui red tag label">Upcoming</a>\n' +
      '    <a class="ui teal tag label">Featured</a>\n',
  },
};
</script>
