<template>
  <i :class="classes()">
    <slot />
  </i>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';

export default {
  name: 'FuiIconGroup',
  props: {
    size: {
      type: String,
      description: 'A group of icons can vary in size.',
      validator: (value) => {
        return !value || Enum.Size.check(value);
      },
      default: '',
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
        this.size,
        'icons'
      );
    },
  },
};
</script>
