<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
// import Mixins from '../../lib/mixins';

export default {  // TODO: Component FuiHeader
  name: 'FuiSubheader',
  mixins: [
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
        'sub',
        'header'
      );
    },
  },
};
</script>
