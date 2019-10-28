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
  name: 'FuiRow',
  mixins: [
    Mixins.PColor,
    Mixins.getMixinAligned(['middle', 'top', 'bottom', 'justified', 'center'], null),
    Mixins.PDisplayOnly,
  ],
  props: {
    equalWidth: {
      type: Boolean,
      description: '', // TODO: descr
    },
    column: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.Number.check(value);
      },
      default: false,
    },
    only: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.Display.check(value);
      },
      default: false,
    },
    doubling: {
      type: Boolean,
      description: '', // TODO: descr
    },
    centered: {
      type: Boolean,
      description: '', // TODO: descr
    },
    stretched: {
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
        ...this.getClassesAligned,
        ...this.getClassesColor,
        this.doubling && 'doubling',
        this.column,
        this.column && 'column',
        this.equalWidth && 'equal width',
        this.centered && 'centered',
        this.stretched && 'stretched',
        ...this.getClassesDisplayOnly,
        'row'
      );
    },
  },
};
</script>
