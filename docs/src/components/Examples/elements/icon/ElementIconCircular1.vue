<template>
  <div>
    <FuiIcon circular name=users></FuiIcon>
    <FuiIcon circular name=users color=teal></FuiIcon>
    <FuiIcon circular name=users inverted></FuiIcon>
    <FuiIcon circular name=users color=teal inverted></FuiIcon>
  </div>
</template>

<script>
export default {
  name: 'ElementIconCircular1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'icon',
    title1: 'Variations',
    title2: 'Circular',
    description: 'An icon can be formatted to appear circular',
    model: `<i class="circular users icon"></i>
<i class="circular teal users icon"></i>
<i class="circular inverted users icon"></i>
<i class="circular inverted teal users icon"></i>`,
  },
};
</script>
