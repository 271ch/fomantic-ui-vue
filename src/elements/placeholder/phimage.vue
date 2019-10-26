<template>
  <div :class="classes" />
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
// import Mixins from '../../lib/mixins';

export default {
  name: 'FuiPHImage',
  mixins: [],
  props: {
    square: {
      type: Boolean,
      description: '', // TODO: descr
    },
    rectangular: {
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
        this.square && 'square',
        this.rectangular && 'rectangular',
        'image'
      );
    },
  },
};
</script>
