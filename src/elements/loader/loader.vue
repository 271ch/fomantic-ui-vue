<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiLoader',
  mixins: [
    Mixins.PColor,
    Mixins.PSize,
    Mixins.getMixinOfBools(
      'Emphasis',
      {
        primary: 'Format showing a higher level of emphasis.',
        secondary: 'Format showing a lower level of emphasis.',
      }
    ),
  ],
  props: {
    active: {
      type: Boolean,
      description: '', // TODO: descr
    },
    disabled: {
      type: Boolean,
      description: '', // TODO: descr
    },
    indeterminate: {
      type: Boolean,
      description: '', // TODO: descr
    },
    slow: {
      type: Boolean,
      description: '', // TODO: descr
    },
    fast: {
      type: Boolean,
      description: '', // TODO: descr
    },
    elastic: {
      type: Boolean,
      description: '', // TODO: descr
    },
    double: {
      type: Boolean,
      description: '', // TODO: descr
    },
    text: {
      type: Boolean,
      description: '', // TODO: descr
    },
    inverted: {
      type: Boolean,
      description: '', // TODO: descr
    },
    centered: {
      type: Boolean,
      description: '', // TODO: descr
    },
    inline: {
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
        this.active && 'active',
        this.disabled && 'disabled',
        ...this.getClassesColor,
        ...this.getClassesEmphasis,
        ...this.getClassesSize,
        this.centered && 'centered',
        this.inline && 'inline',
        this.slow && 'slow',
        this.fast && 'fast',
        this.elastic && 'elastic',
        this.double && 'double',
        this.indeterminate && 'indeterminate',
        this.text && 'text',
        this.inverted && 'inverted',
        'loader'
      );
    },
  },
};
</script>
