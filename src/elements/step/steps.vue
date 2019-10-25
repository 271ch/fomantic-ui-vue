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
  name: 'FuiSteps',
  mixins: [
    Mixins.getMixinAttached(['top', 'bottom'], null),
    Mixins.PSize,
  ],
  props: {
    n: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.Number.check(value);
      },
      default: false,
    },
    ordered: {
      type: Boolean,
      description: '',
    },
    fluid: {
      type: Boolean,
      description: '',
    },
    vertical: {
      type: Boolean,
      description: '',
    },
    inverted: {
      type: Boolean,
      description: '',
    },
    tablet: {
      type: Boolean,
      description: '',
    },
    stackable: {
      type: Boolean,
      description: '',
    },
    unstackable: {
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
        'ui',
        this.n,
        ...this.getClassesSize,
        ...this.getClassesAttached,
        this.inverted && 'inverted',
        this.ordered && 'ordered',
        this.fluid && 'fluid',
        this.vertical && 'vertical',
        this.tablet && 'tablet',
        this.stackable && 'stackable',
        this.unstackable && 'unstackable',
        'steps'
      );
    },
  },
};
</script>
