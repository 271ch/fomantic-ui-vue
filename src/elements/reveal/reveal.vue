<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
// import Mixins from '../../lib/mixins';

export default {
  name: 'FuiReveal',
  mixins: [],
  props: {
    small: {
      type: Boolean,
      description: '', // TODO: descr
    },
    circular: {
      type: Boolean,
      description: '', // TODO: descr
    },
    active: {
      type: Boolean,
      description: '', // TODO: descr
    },
    disabled: {
      type: Boolean,
      description: '', // TODO: descr
    },
    instant: {
      type: Boolean,
      description: '', // TODO: descr
    },
    fade: {
      type: Boolean,
      description: '', // TODO: descr
    },
    image: {
      type: Boolean,
      description: '', // TODO: descr
    },
    move: {
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value === true || value === false || Enum.Move.check(value);
      },
      default: false,
    },
    rotate: {
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value === true || value === false || value === 'left';
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
    classes: function () {
      return u.concatClasses(
        'ui',
        this.small && 'small',
        this.circular && 'circular',
        this.active && 'active',
        this.disabled && 'disabled',
        this.instant && 'instant',
        this.fade && 'fade',
        this.move && 'move',
        this.move,
        this.rotate && 'rotate',
        this.rotate,
        'reveal',
        this.image && 'image'
      );
    },
  },
};
</script>
