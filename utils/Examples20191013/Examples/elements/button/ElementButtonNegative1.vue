<template>
  <div>
    <button class="negative ui button">Negative Button</button>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonNegative1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Variations',
      title2: 'Negative',
      description: 'A button can hint towards a negative consequence',
      model: '    <button class="negative ui button">Negative Button</button>\n',
    };
  },
};
</script>
