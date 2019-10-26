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
  name: 'FuiDimmer',
  mixins: [],
  props: {
    active: {
      type: Boolean,
      description: '', // TODO: description
    },
    inverted: {
      type: Boolean,
      description: '', // TODO: description
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
        this.inverted && 'inverted',
        'dimmer'
      );
    },
  },
};
</script>
