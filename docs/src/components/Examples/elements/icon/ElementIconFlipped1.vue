<template>
  <div>
    <FuiIcon name=cloud flipped=horizontally></FuiIcon>
    <FuiIcon name=cloud flipped=vertically></FuiIcon>
  </div>
</template>

<script>
export default {
  name: 'ElementIconFlipped1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'icon',
    title1: 'Variations',
    title2: 'Flipped',
    description: 'An icon can be flipped',
    model: `<i class="horizontally flipped cloud icon"></i>
<i class="vertically flipped cloud icon"></i>
`,
  },
};
</script>
