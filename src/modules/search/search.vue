<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
// import Mixins from '../../lib/mixins';

export default {
  name: 'FuiSearch',
  mixins: [],
  props: {
    /*
    prop1: {
      type: Boolean,
      description: '', // TODO: description
    },
    prop2: {
      type: String,
      description: '', // TODO: description
      default: '',
    },
    prop3: {
      type: [Boolean, String],
      description: '', // TODO: description
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: false,
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
        'search'
      );
    },
  },
};
</script>
