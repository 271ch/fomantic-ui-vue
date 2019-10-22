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
  name: 'FuiSegment',
  mixins: [
    Mixins.getMixinAligned(['center'], null),
  ],
  props: {
    inverted: { // TODO: descr
      type: Boolean,
      description: '',
    },
    attached: { // TODO: descr
      type: Boolean,
      description: '',
    },
    placeholder: {
      type: Boolean,
      descr: '', // TODO: descr
    },
    basic: {
      type: Boolean,
      descr: '', // TODO: descr
    },
    vertical: {
      type: Boolean,
      descr: '', // TODO: descr
    },
    clearing: {
      type: Boolean,
      descr: '', // TODO: descr
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
        ...this.getClassesAligned,
        this.inverted && 'inverted',
        this.attached && 'attached',
        this.clearing && 'clearing',
        this.basic && 'basic',
        this.vertical && 'vertical',
        this.placeholder && 'placeholder',
        'segment'
      );
    },
  },
};
</script>
