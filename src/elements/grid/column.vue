<template>
  <div :class="classes()">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';

export default {
  name: 'FuiColumn',
  props: {
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  methods: {
    classes: function () {
      return u.concatClasses(
        // left,right floated
        // right,left,middle aligned
        // begin repeat
        //   six wide
        //   tablet/wide computer/large screen/widescreen
        // end repeat
        // olive
        // computer,tablet,mobile only
        // stretched
        'column'
      );
    },
  },
};
</script>
