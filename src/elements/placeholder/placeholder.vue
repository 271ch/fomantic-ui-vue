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
  name: 'FuiPlaceholder',
  mixins: [],
  props: {
    active: {
      type: Boolean,
      description: '', // TODO: descr
    },
    fluid: {
      type: Boolean,
      description: '', // TODO: descr
    },
    inverted: {
      type: Boolean,
      description: '', // TODO: descr
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
        this.active && 'active',
        this.fluid && 'fluid',
        this.inverted && 'inverted',
        'placeholder'
      );
    },
  },
};
</script>
