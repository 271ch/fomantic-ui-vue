<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiRail',
  mixins: [
    Mixins.PSize,
    Mixins.getMixinAttached(['left', 'right', 'left internal', 'right internal'], null)
  ],
  props: {
    very: {
      type: Boolean,
      description: '', // TODO: descr
    },
    close: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.LeftRight.check(value);
      },
      default: false,
    },
    dividing: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.LeftRight.check(value);
      },
      default: false,
    },
    internal: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.LeftRight.check(value);
      },
      default: false,
    },
    left: {
      type: Boolean,
      description: '', // TODO: descr
    },
    right: {
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
        this.close,
        this.very && 'very',
        this.close && 'close',
        this.dividing,
        this.dividing && 'dividing',
        this.internal,
        this.internal && 'internal',
        ...this.getClassesAttached,
        this.left && 'left',
        this.right && 'right',
        ...this.getClassesSize,
        'rail'
      );
    },
  },
};
</script>
