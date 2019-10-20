<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
// import Mixins from '../../lib/mixins';

export default {
  name: 'FuiItems',
  mixins: [],
  props: {
    relaxed: { // TODO:descr
      type: [Boolean, String],
      validator: (value) => {
        return value === false || value === true || value === 'very';
      },
      default: false,
      description: '',
    },
    divided: {
      type: Boolean,
      description: '', // TODO:descr
    },
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  computed: {
    classes: function () {
      return u.concatClasses(
        'ui',
        this.relaxed !== true && this.relaxed,
        this.relaxed && 'relaxed',
        this.divided && 'divided',
        'items'
      );
    },
  },
};
</script>
