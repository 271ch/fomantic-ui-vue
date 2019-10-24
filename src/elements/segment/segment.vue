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
  name: 'FuiSegment',
  mixins: [
    Mixins.PColor,
    Mixins.getMixinAligned(['center', 'top', 'bottom', 'left', 'right'], null),
    Mixins.getMixinAttached([true, 'top', 'bottom'], null),
    Mixins.getMixinOfBools(
      'Emphasis',
      {
        secondary: 'Format showing a lower level of emphasis.',
        tertiary: 'A none bordered less important button.',
      }
    ),
    Mixins.PFitted,
  ],
  props: {
    inverted: { // TODO: descr
      type: Boolean,
      description: '',
    },
    circular: { // TODO: descr
      type: Boolean,
      description: '',
    },
    raised: { // TODO: descr
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
    compact: {
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
    disabled: {
      type: Boolean,
      descr: '', // TODO: descr
    },
    floated: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || Enum.LeftRight.check(value);
      },
      default: false,
    },
    tall: {
      type: Boolean,
      descr: '', // TODO: descr
    },
    stacked: {
      type: Boolean,
      descr: '', // TODO: descr
    },
    loading: {
      type: [Boolean, String],
      descr: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || value === 'double' || value === 'usual double';
      },
      default: false,
    },
    padded: {
      type: [Boolean, String],
      descr: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || value === 'very';
      },
      default: false,
    },
    piled: {
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
        ...this.getClassesEmphasis,
        ...this.getClassesColor,
        this.inverted && 'inverted',
        ...this.getClassesAttached,
        this.clearing && 'clearing',
        this.basic && 'basic',
        this.vertical && 'vertical',
        this.placeholder && 'placeholder',
        this.raised && 'raised',
        this.disabled && 'disabled',
        this.circular && 'circular',
        this.compact && 'compact',
        this.floated,
        this.floated && 'floated',
        ...this.getClassesFitted,
        this.tall && 'tall',
        this.stacked && 'stacked',
        this.loading,
        this.loading && 'loading',
        this.padded,
        this.padded && 'padded',
        this.piled && 'piled',
        'segment'
      );
    },
  },
};
</script>
