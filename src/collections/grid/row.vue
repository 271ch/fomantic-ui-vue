<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiRow',
  mixins: [
    Mixins.getMixinAligned(['middle'], null),
  ],
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
        ...this.getClassesAligned,
        'row'
      );
    },
  },
};
</script>
