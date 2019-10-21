<template>
  <div>
    <FuiIcons size=huge>
      <FuiIcon name=puzzle></FuiIcon>
      <FuiIcon name=add corner="top left"></FuiIcon>
    </FuiIcons>
    <FuiIcons size=huge>
      <FuiIcon name=puzzle></FuiIcon>
      <FuiIcon name=add corner="top right"></FuiIcon>
    </FuiIcons>
    <FuiIcons size=huge>
      <FuiIcon name=puzzle></FuiIcon>
      <FuiIcon name=add corner="bottom left"></FuiIcon>
    </FuiIcons>
    <FuiIcons size=huge>
      <FuiIcon name=puzzle></FuiIcon>
      <FuiIcon name=add corner="bottom right"></FuiIcon>
    </FuiIcons>
  </div>
</template>

<script>
export default {
  name: 'ElementIconCornerIcon2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'icon',
    title1: 'Groups',
    title2: 'Corner Icon',
    description: 'A group of icons can display a smaller corner icon',
    model: `<i class="huge icons">
<i class="puzzle icon"></i>
<i class="top left corner add icon"></i>
</i>
<i class="huge icons">
<i class="puzzle icon"></i>
<i class="top right corner add icon"></i>
</i>
<i class="huge icons">
<i class="puzzle icon"></i>
<i class="bottom left corner add icon"></i>
</i>
<i class="huge icons">
<i class="puzzle icon"></i>
<i class="bottom right corner add icon"></i>
</i>
`,
  },
};
</script>
