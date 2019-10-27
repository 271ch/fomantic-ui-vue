<template>
  <component
    :is="gTag"
    :class="classes"
  >
    <slot />
  </component>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
// import Mixins from '../../lib/mixins';

export default {
  name: 'FuiBCDivider',
  mixins: [
  ],
  props: {
    tag: {
      type: [Boolean, String],
      description: `Possible alternative tag: span.`,
      validator: (value) => {
        return value === false || value === 'span';
      },
      default: false,
    },
    iconName: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value !== true;
      },
      default: false,
    },
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  computed: {
    gTag: function () {
      if (this.iconName !== false) return 'i';
      if (!this.tag) return 'div';
      return this.tag;
    },
    classes: function () {
      return u.concatClasses(
        this.iconName,
        this.iconName && 'icon',
        'divider'
      );
    },
  },
};
</script>
