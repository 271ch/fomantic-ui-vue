<template>
  <div>
    <FuiIcon bordered name=users></FuiIcon>
    <FuiIcon bordered name=users color=teal></FuiIcon>
    <FuiIcon bordered name=users color=black inverted></FuiIcon>
    <FuiIcon bordered name=users color=teal inverted></FuiIcon>
  </div>
</template>

<script>
export default {
  name: 'ElementIconBordered1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'icon',
    title1: 'Variations',
    title2: 'Bordered',
    description: 'An icon can be formatted to appear circular',
    model: `<i class="bordered users icon"></i>
<i class="bordered teal users icon"></i>
<i class="bordered inverted black users icon"></i>
<i class="bordered inverted teal users icon"></i>`,
  },
};
</script>
