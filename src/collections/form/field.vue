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
  name: 'FuiField',
  mixins: [],
  props: {
    inline: {
      type: Boolean,
      description: '', // TODO:
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
        this.inline && 'inline',
        'field'
      );
    },
  },
};
</script>
