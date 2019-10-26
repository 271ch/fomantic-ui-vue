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
  name: 'FuiPopup',
  mixins: [],
  props: {
    flowing: {
      type: Boolean,
      description: '', // TODO: description
    },
    fluid: {
      type: Boolean,
      description: '', // TODO: description
    },
    basic: {
      type: Boolean,
      description: '', // TODO: description
    },
    admission: {
      type: Boolean,
      description: '', // TODO: description
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
        this.flowing && 'flowing',
        this.fluid && 'fluid',
        this.basic && 'basic',
        this.admission && 'admission',
        'popup'
      );
    },
  },
};
</script>
