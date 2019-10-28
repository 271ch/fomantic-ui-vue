<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

const getDisplay = function () {
  return {
    type: [Boolean, String],
    description: '', // TODO: descr
    validator: (value) => {
      return value === false || Enum.Number.check(value);
    },
    default: false,
  };
}

const displays = [
  { prop: 'mobile', name: 'mobile', },
  { prop: 'tablet', name: 'tablet', },
  { prop: 'computer', name: 'computer', },
  { prop: 'largescreen', name: 'large screen', },
  { prop: 'widescreen', name: 'widescreen', },
];

export default {
  name: 'FuiColumn',
  mixins: [
    Mixins.PColor,
    Mixins.PDisplayOnly,
    Mixins.getMixinAligned(['right', 'left', 'middle'], null),
    Mixins.getMixinFloated(['right', 'left'], null),
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
    stretched: {
      type: Boolean,
      description: '', // TODO: descr
    },
    mobile: getDisplay(),
    tablet: getDisplay(),
    computer: getDisplay(),
    largescreen: getDisplay(),
    widescreen: getDisplay(),
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
        ...this.getClassesFloated,
        ...this.getClassesAligned,
        ...this.getClassesDisplay(),
        ...this.getClassesColor,
        ...this.getClassesDisplayOnly,
        this.stretched && 'stretched',
        'column'
      );
    },
  },
  methods: {
    getClassesDisplay: function () {
      let r = [];
      for (let i = 0; i < displays.length; i++) {
        if (this[displays[i].prop] !== false) {
          r.push(this[displays[i].prop], 'wide', displays[i].name);
        }
      }
      return r;
    },
  },
};
</script>
