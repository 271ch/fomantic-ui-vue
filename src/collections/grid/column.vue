<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiColumn',
  mixins: [
    Mixins.getMixinAligned(['right', 'left', 'middle'], null),
  ],
  props: {
    wide: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.Number.check(value);
      },
      default: false,
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
        this.wide,
        this.wide && 'wide',
        // left,right floated
        ...this.getClassesAligned,
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
