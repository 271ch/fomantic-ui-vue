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
  name: 'FuiList',
  mixins: [
    Mixins.PSize,
  ],
  props: {
    horizontal: { // TODO: Component FuiList
      type: Boolean,
      description: '',
    },
    divided: { // TODO: Component FuiList
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
        ...this.getClassesSize,
        this.horizontal && 'horizontal',
        this.divided && 'divided',
        'list'
      );
    },
  },
};
</script>
