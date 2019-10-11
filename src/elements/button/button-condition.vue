<template>
  <div
    :class="classes()"
    :data-text="text"
  />
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';

export default {
  name: 'FuiButtonGroup',
  props: {
    text: {
      type: String,
      description: 'The button is keyboard accessible.',
      default: 'or',
    },
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  methods: {
    classes: function () {
      return u.concatClasses(
        'or'
      );
    },
  },
};
</script>
