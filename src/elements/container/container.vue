<template>
  <div :class="classes()">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiContainer',
  mixins: [Mixins.PLRJAlignment],
  props: {
    text: {
      type: Boolean,
      description: 'A container can reduce its maximum width to more naturally accomodate a single column of text.',
    },
    fluid: {
      type: Boolean,
      description: 'A fluid container has no maximum width.',
    },
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  methods: {
    classes: function () {
      return u.concatClasses(
        'ui',
        ...this.getClassesLRJAlignment(),
        this.text && 'text',
        this.fluid && 'fluid',
        'container'
      );
    },
  },
};
</script>
