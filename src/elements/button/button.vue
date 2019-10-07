<template>
  <div>FUI button</div>
</template>

<script>
export default {
  name: 'fui-button',
  props: {
    focusable: {
      type: Boolean,
      description: 'The button is keyboard accessible.',
    },
    primary: {
      type: Boolean,
      description: 'A button can be formatted to show different levels of emphasis.',
    },
  },
  events: {
    click: {
      description: 'Click event passed to the button',
    },
  },
};
</script>
