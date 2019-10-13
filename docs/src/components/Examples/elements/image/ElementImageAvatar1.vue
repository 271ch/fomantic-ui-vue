<template>
  <div>
    <img class="ui avatar image" src="/images/wireframe/square-image.png"/>
    <span>Username</span>
  </div>
</template>

<script>
export default {
  name: 'ElementImageAvatar1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'image',
      title1: 'Variations',
      title2: 'Avatar',
      description: 'An image may be formatted to appear inline with text as an avatar',
      model: '    <img class="ui avatar image" src="/images/wireframe/square-image.png"/>\n' +
      '    <span>Username</span>\n',
    };
  },
};
</script>
