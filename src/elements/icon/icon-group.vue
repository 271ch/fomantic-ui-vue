<template>
  <i :class="classes">
    <slot />
  </i>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiIconGroup',
  mixins: [Mixins.PSize],
  props: {
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  computed: {
    classes: function () {
      return u.concatClasses(
        ...this.getClassesSize(),
        'icons'
      );
    },
  },
};
</script>
