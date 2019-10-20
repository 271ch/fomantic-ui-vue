<template>
  <i :class="classes"></i>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiFlag',
  mixins: [Mixins.PCountry],
  props: { },
  events: {
    click: {
      description: 'Click event',
    },
  },
  computed: {
    classes: function () {
      return u.concatClasses(
        ...this.getClassesCountry(),
        'flag'
      );
    },
  },
};
</script>
