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
    clearing: {
      type: Boolean,
      descr: '', // TODO: descr
    },
    /*
    prop1: { // TODO: Component FuiSegment
      type: Boolean,
      description: '',
    },
    prop2: {
      type: String,
      description: '',
      default: '',
    },
    prop3: {
      type: String,
      description: '',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
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
        'ui',
        ...this.getClassesAligned,
        this.inverted && 'inverted',
        this.attached && 'attached',
        this.clearing && 'clearing',
        this.basic && 'basic',
        this.placeholder && 'placeholder',
        'segment'
      );
    },
  },
};
</script>
