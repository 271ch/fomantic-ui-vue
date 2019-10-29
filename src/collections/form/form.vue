<template>
  <component
    :is="form?'form':'div'"
    :class="classes"
  >
    <slot />
  </component>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
// import Mixins from '../../lib/mixins';

export default {
  name: 'FuiForm',
  mixins: [],
  props: {
    form: {
      type: Boolean,
      description: '', // TODO: descr
    },
    fluid: {
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
        this.fluid && 'fluid',
        'form'
      );
    },
  },
};
</script>
