<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiText',
  mixins: [
    Mixins.PSize,
    Mixins.PColor,
  ],
  props: {
    inverted: {
      type: Boolean,
      description: '', // TODO: descr
    },
    int: {
      type: Boolean,
      description: 'Internal text (no ui)', // TODO: descr
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
        !this.int && 'ui',
        ...this.getClassesSize,
        this.inverted && 'inverted',
        ...this.getClassesColor,
        'text'
      );
    },
  },
};
</script>
