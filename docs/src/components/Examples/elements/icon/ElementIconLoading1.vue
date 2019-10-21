<template>
  <div>
    <FuiIcon name=spinner loading></FuiIcon>
    <FuiIcon name="notched circle" loading></FuiIcon>
    <FuiIcon name=asterisk loading></FuiIcon>
  </div>
</template>

<script>
export default {
  name: 'ElementIconLoading1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'icon',
    title1: 'States',
    title2: 'Loading',
    description: 'An icon can be used as a simple loader',
    model: `<i class="spinner loading icon"></i>
<i class="notched circle loading icon"></i>
<i class="asterisk loading icon"></i>
`,
  },
};
</script>
