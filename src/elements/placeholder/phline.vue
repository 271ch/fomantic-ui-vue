<template>
  <div :class="classes" />
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiPHLine',
  mixins: [
    Mixins.getMixinOfBools('Size', {
      medium: '',
      full: '',
      long: '',
      short: '',
    })
  ],
  props: {
    very: {
      type: Boolean,
      description: '',
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
        this.very && 'very',
        ...this.getClassesSize,
        'line'
      );
    },
  },
};
</script>
