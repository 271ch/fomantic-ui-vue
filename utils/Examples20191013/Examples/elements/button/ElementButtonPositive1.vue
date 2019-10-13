<template>
  <div>
    <button class="positive ui button">Positive Button</button>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonPositive1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Variations',
      title2: 'Positive',
      description: 'A button can hint towards a positive consequence',
      model: '    <button class="positive ui button">Positive Button</button>\n',
    };
  },
};
</script>
