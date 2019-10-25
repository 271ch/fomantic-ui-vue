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
  name: 'FuiSegments',
  mixins: [
  ],
  props: {
    compact: {
      type: Boolean,
      description: '', // TODO: descr
    },
    raised: {
      type: Boolean,
      description: '', // TODO: descr
    },
    basic: {
      type: Boolean,
      description: '', // TODO: descr
    },
    stacked: {
      type: Boolean,
      description: '', // TODO: descr
    },
    stackable: {
      type: Boolean,
      description: '', // TODO: descr
    },
    piled: {
      type: Boolean,
      description: '', // TODO: descr
    },
    horizontal: {
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
        this.compact && 'compact',
        this.raised && 'raised',
        this.basic && 'basic',
        this.horizontal && 'horizontal',
        this.piled && 'piled',
        this.stacked && 'stacked',
        this.stackable && 'stackable',
        'segments'
      );
    },
  },
};
</script>
