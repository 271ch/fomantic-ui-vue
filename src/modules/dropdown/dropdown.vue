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
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiDropdown',
  mixins: [
    Mixins.getMixinTag(['div'], 'select'),
  ],
  props: {
    compact: { // TODO: descr
      type: Boolean,
      description: '',
    },
    selection: { // TODO: descr
      type: Boolean,
      description: '',
    },
    /*
    prop2: {
      type: String,
      description: '',
      default: '',
    },
    prop3: {
      type: String,
      description: '',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
    },
    */
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
        this.selection && 'selection',
        'dropdown'
      );
    },
  },
};
</script>
