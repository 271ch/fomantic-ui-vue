<template>
  <div :class="classes()">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';

export default {
  name: 'FuiButton',
  props: {
    focusable: {
      type: Boolean,
      description: 'The button is keyboard accessible.',
    },
    emphasis: {
      type: Boolean,
      description: 'A button can be formatted to show different levels of emphasis (empty,primary,secondary,tertiary).',
      validator: (value) => {
        return Enum.Emphasis.check(value);
      },
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
        'ui button'
      );
    },
  },
};
</script>
