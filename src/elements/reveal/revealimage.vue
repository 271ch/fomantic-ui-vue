<template>
  <img
    :src="src"
    :class="classes"
  >
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
// import Mixins from '../../lib/mixins';

export default {
  name: 'FuiRevealImage',
  mixins: [],
  props: {
    src: {
      type: String,
      description: '', // TODO: descr
      default: '',
    },
    hidden: {
      type: Boolean,
      description: '', // TODO: descr
    },
    visible: {
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
        this.hidden && 'hidden',
        this.visible && 'visible',
        'content'
      );
    },
  },
};
</script>
