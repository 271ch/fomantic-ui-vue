<template>
  <div :class="classes()">
    <slot> or </slot>
  </div>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';

export default {
  name: 'FuiButtonCondition',
  props: {
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  methods: {
    classes: function () {
      return u.concatClasses([
        'or',
      ]);
    },
  },
};
</script>
