<template>
  <div :class="classes()">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';

export default {
  name: 'FuiContainer',
  props: {
    visible: {
      type: Boolean,
      description: 'Content visible by pointer hovering.',
    },
    hidden: {
      type: Boolean,
      description: 'Content visible by pointer not hovering.',
    },
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  methods: {
    classes: function () {
      return u.concatClasses(
        'ui',
        'container'
      );
    },
  },
};
</script>
