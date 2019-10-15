<template>
  <div>
    <FuiButton basic>
      <FuiIcon name=user></FuiIcon>
      Add Friend
    </FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonBasic1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Types',
    title2: 'Basic',
    description: 'A basic button is less pronounced',
    model: '    <button class="ui basic button">\n' +
      '      <i class="user icon"/>\n' +
      '      Add Friend\n' +
      '    </button>\n',
  },
};
</script>
