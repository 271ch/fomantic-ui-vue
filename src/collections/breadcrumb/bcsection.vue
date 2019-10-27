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
  name: 'FuiBCSection',
  mixins: [
    Mixins.getMixinTag(['div'], 'a'),
  ],
  props: {
    active: {
      type: Boolean,
      description: '', // TODO: descr
    },
    /*
    prop1: { // TODO: Component FuiBreadcrumb
      type: Boolean,
      description: '',
    },
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
        this.active && 'active',
        'section'
      );
    },
  },
};
</script>
