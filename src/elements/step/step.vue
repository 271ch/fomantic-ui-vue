<template>
  <component
    :is="gTag"
    :class="classes"
  >
    <i
      v-if="iconName"
      :class="iconName + ' icon'"
    />
    <slot />
  </component>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiStep',
  mixins: [
    Mixins.getMixinTag(['a'], 'div'),
  ],
  props: {
    iconName: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value !== true;
      },
      default: false,
    },
    disabled: {
      type: Boolean,
      description: '', // TODO: descr.
    },
    active: {
      type: Boolean,
      description: '', // TODO: descr.
    },
    link: {
      type: Boolean,
      description: '', // TODO: descr.
    },
    completed: {
      type: Boolean,
      description: '', // TODO: descr.
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
        this.completed && 'completed',
        this.link && 'link',
        this.disabled && 'disabled',
        this.active && 'active',
        'step'
      );
    },
  },
};
</script>
